package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Role;
import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.entity.UserRole;
import com.webspecialization.backend.entity.composite_key.UserRoleId;
import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.exception.RecordAlreadyExistsException;
import com.webspecialization.backend.model.request.ForgottenPasswordRequest;
import com.webspecialization.backend.model.request.LoginRequest;
import com.webspecialization.backend.model.request.RegisterRequest;
import com.webspecialization.backend.model.request.ResetPasswordRequest;
import com.webspecialization.backend.model.response.UserResponse;
import com.webspecialization.backend.repo.RoleRepository;
import com.webspecialization.backend.repo.UserRepository;
import com.webspecialization.backend.security.JWTUtil;
import com.webspecialization.backend.service.email.SmtpEmailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private SmtpEmailService emailService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    private PasswordEncoder pd;
    ModelMapper mapper = new ModelMapper();

    public String login(LoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());
        try {
            authenticationManager.authenticate(token);
            String jwt = jwtUtil.generateToken(loginRequest.getUsername());
            return jwt;
        } catch (Exception e) {
            throw new InvalidArgumentException("Username or password is wrong");
        }
    }

    public UserResponse registerUser(RegisterRequest registerRequest) {
        if (userRepository.findUserByUsername(registerRequest.getUsername()).orElse(null) != null || userRepository.findUserByEmail(registerRequest.getEmail()) != null) {
            throw new RecordAlreadyExistsException("Username or email have already used. Please change username or email");
        }
        User newUser = mapper.map(registerRequest, User.class);

        Date now = new Date();
        newUser.setPassword(pd.encode(registerRequest.getPassword()));
        newUser.setCreatedDate(now);
        newUser.setUpdatedDate(now);

        // set role default for user
        Role defaultRole = roleRepository.findRoleByRoleName("ROLE_USER");
        UserRole userRole = new UserRole();
        UserRoleId userRoleId = new UserRoleId();
        userRoleId.setUserId(newUser.getId());
        userRoleId.setRoleId(defaultRole.getId());
        userRole.setId(userRoleId);
        userRole.setUser(newUser);
        userRole.setRole(defaultRole);
        newUser.getUserRoles().add(userRole);

        UserResponse userResponse = mapper.map(userRepository.save(newUser), UserResponse.class);
        List<String> rolesString = new ArrayList<>();
        rolesString.add(defaultRole.getRoleName());
        userResponse.setRoles(rolesString);
        emailService.verifyEmail(newUser.getEmail());
        return userResponse;
    }

    public void verifyEmail(String email) {
        User u = userRepository.findUserByEmail(email);
        if (u == null) throw new NotFoundException("Maybe your email haven't registered");
        u.setActive(true);
        userRepository.save(u);
    }

    // send email to change password (this email have a link to direct to the change password page)
    public void sendNewPassword(ForgottenPasswordRequest email) {
        try{
            emailService.forgotPassword(email.getEmail());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // check resetPasswordToken, if resetPasswordToken have already store in db, return the changing password page.
    public User showResetPasswordForm(String token) {
        User user = userRepository.getUserByResetPasswordToken(token);
        if (user == null) {
            throw new NotFoundException("The token not found");
        }
        return user;
    }

    public void resetPassword(ResetPasswordRequest resetPasswordRequest) {
        User user = userRepository.getUserByResetPasswordToken(resetPasswordRequest.getToken());
        if (user == null) {
            throw new NotFoundException("Invalid reset password token");
        }
        // update user password
        user.setPassword(pd.encode(resetPasswordRequest.getPassword()));
        user.setResetPasswordToken(null);
        userRepository.save(user);
    }
}
