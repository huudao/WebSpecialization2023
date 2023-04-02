package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.Role;
import com.webspecialization.backend.model.User;
import com.webspecialization.backend.model.dto.EmailDTO;
import com.webspecialization.backend.model.dto.LoginDTO;
import com.webspecialization.backend.model.dto.ResetPasswordDTO;
import com.webspecialization.backend.repository.RoleRepository;
import com.webspecialization.backend.repository.UserRepository;
import com.webspecialization.backend.security.JWTUtil;
import com.webspecialization.backend.service.email.SmtpEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController()
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private SmtpEmailService emailService;

    @Autowired
    private PasswordEncoder pd;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if(userRepository.findUserByUsername(user.getUsername()) != null || userRepository.findUserByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Username or email have already used. Please change username or email");
        }
        try {
            Date now = new Date();
            user.setPassword(pd.encode(user.getPassword()));
            user.setInsertedAt(now);
            user.setUpdatedAt(now);
            List<Role> roles = new ArrayList<>();
            Role defaultRole = roleRepository.getRoleByName("ROLE_USER");
            roles.add(defaultRole);
            user.setRoles(roles);
            userRepository.save(user);
            emailService.verifyEmail(user.getEmail());
            return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
        } catch (MethodArgumentTypeMismatchException e) {
            e.printStackTrace();
            throw e;
        }
    }

    @GetMapping("/verify-email")
    public ResponseEntity<String> verifyEmail(@RequestParam String email) {
        User u = userRepository.findUserByEmail(email);
        if(u == null) return (ResponseEntity<String>) ResponseEntity.notFound();
        u.setActive(true);
        userRepository.save(u);
        return ResponseEntity.ok("Successful verification");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO request) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
        try {
            authenticationManager.authenticate(token);
            String jwt = jwtUtil.generateToken(request.getUsername());
            return ResponseEntity.ok(jwt);
        } catch (AuthenticationException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<Void> sendNewPassword(@RequestBody EmailDTO email) {
        System.out.println("hello");
        try {
            emailService.forgotPassword(email.getEmail());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping("/reset-password")
    public ResponseEntity<?> showResetPasswordForm(@RequestParam("token") String token) {
        User user = userRepository.getUserByResetPasswordToken(token);
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid reset password token");
        }
        // return reset password form view
        return ResponseEntity.ok("Reset password form view");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordDTO resetPasswordRequest) {
        User user = userRepository.getUserByResetPasswordToken(resetPasswordRequest.getToken());
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid reset password token");
        }
        // update user password
        user.setPassword(pd.encode(resetPasswordRequest.getPassword()));
        user.setResetPasswordToken(null);
		userRepository.save(user);

        // return success message
        return ResponseEntity.ok("Password reset successful");
    }

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        System.out.println("whwewheehw");

        return ResponseEntity.ok("hellloooooooooo");
    }
}
