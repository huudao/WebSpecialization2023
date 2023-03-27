package com.webspecialization.backend.service.email;

import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;


public interface EmailService {
    void sendEmail(SimpleMailMessage msg);
    void sendEmailHtml(MimeMessage msg);
    void forgotPassword(String email);
}
