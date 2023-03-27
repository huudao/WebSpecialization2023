package com.webspecialization.backend.service.email;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SmtpEmailService extends AbstractEmailService{
    @Autowired
    private MailSender mailSender;
    @Autowired
    private JavaMailSender javaMailSender;
    @Override
    public void sendEmail(SimpleMailMessage msg) {
        mailSender.send(msg);
    }

    @Override
    public void sendEmailHtml(MimeMessage msg) {
        javaMailSender.send(msg);
    }
}
