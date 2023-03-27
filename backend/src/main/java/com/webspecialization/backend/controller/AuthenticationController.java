package com.webspecialization.backend.controller;

import com.webspecialization.backend.dto.LoginDTO;
import com.webspecialization.backend.repository.UserRepository;
import com.webspecialization.backend.security.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController{
    @Autowired
    private UserRepository repository;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;


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

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("hellloooooooooo");
    }
}
