package com.webspecialization.backend.service.email;

import com.webspecialization.backend.model.User;
import com.webspecialization.backend.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

public abstract class AbstractEmailService implements EmailService {
    private Random rand = new Random();
    @Value("${default.sender}")
    private String sender;

    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder pe;

    @Autowired
    HttpServletRequest request;

    public String getBaseUrl() {

        String scheme = request.getScheme();
        String serverName = request.getServerName();
        int serverPort = request.getServerPort();
        String contextPath = request.getContextPath();
        return scheme + "://" + serverName + ":" + serverPort + contextPath + "/";
    }

    @Override
    public void forgotPassword(String email) {
        User u = repository.findUserByEmail(email);
        if (u == null) {
            throw new RuntimeException("Invalid email address");
        }
        String token = UUID.randomUUID().toString();
        u.setResetPasswordToken(token);
        repository.save(u);
        String resetPasswordLink = getBaseUrl() + "api/auth/reset-password?token=" + token;

        SimpleMailMessage sm = prepareLinkForResetPasswordEmail(email, resetPasswordLink);
        sendEmail(sm);
    }

    public void verifyEmail(String email) {
        String resetPasswordLink = getBaseUrl() + "api/auth/verify-email?email=" + email;
        SimpleMailMessage sm = new SimpleMailMessage();
        sm.setTo(email);
        sm.setFrom(sender);
        sm.setSubject("Please verify your account in Perfumania");
        sm.setSentDate(new Date(System.currentTimeMillis()));
        sm.setText("Verify Account Link : " + resetPasswordLink);
        sendEmail(sm);
    }

    protected SimpleMailMessage prepareLinkForResetPasswordEmail(String email, String link) {
        SimpleMailMessage sm = new SimpleMailMessage();
        sm.setTo(email);
        sm.setFrom(sender);
        sm.setSubject("Reset password for your account in Perfumania");
        sm.setSentDate(new Date(System.currentTimeMillis()));
        sm.setText("Reset password link : " + link);
        return sm;
    }

}
