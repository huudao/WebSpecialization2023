package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.request.ForgottenPasswordRequest;
import com.webspecialization.backend.model.request.LoginRequest;
import com.webspecialization.backend.model.request.RegisterRequest;
import com.webspecialization.backend.model.request.ResetPasswordRequest;
import com.webspecialization.backend.model.response.UserResponse;
import com.webspecialization.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authService.registerUser(registerRequest));
    }

    @GetMapping("/verify-email")
    public ResponseEntity<HttpStatus> verifyEmail(@RequestParam String email) {
        authService.verifyEmail(email);
        return ResponseEntity.ok().build();
    }

    // send email to change password (this email have a link to direct to the change password page)
    @PostMapping("/forgot-password")
    public ResponseEntity<HttpStatus> sendNewPassword(@Valid @RequestBody ForgottenPasswordRequest email) {
        authService.sendNewPassword(email);
        return ResponseEntity.ok().build();
    }

    // user click link to change password in the email , will direct to a page to change password
    @GetMapping("/reset-password")
    public ResponseEntity<?> showResetPasswordForm(@RequestParam("token") String token) {
        authService.showResetPasswordForm(token);
        // return reset password form view
        return ResponseEntity.ok("Reset password form view");
    }

    // In the change password page, user fill information to change password
    @PostMapping("/reset-password")
    public ResponseEntity<HttpStatus> resetPassword(@Valid @RequestBody ResetPasswordRequest resetPasswordRequest) {
        authService.resetPassword(resetPasswordRequest);
        return ResponseEntity.ok().build();
    }


}
