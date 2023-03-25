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
        // Creating UsernamePasswordAuthenticationToken object
        // to send it to authentication manager.
        // Attention! We used two parameters constructor.
        // It sets authentication false by doing this.setAuthenticated(false);
        System.out.println(request.getUsername());
        System.out.println(request.getPassword());
        System.out.println("Hello");
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword());
        // we let the manager do its job.
//        System.out.println("hellhelhlheleh");
//        authenticationManager.authenticate(token);
//        System.out.println("hellhelhlheleh");
//        // if there is no exception thrown from authentication manager,
//        // we can generate a JWT token and give it to user.
//        String jwt = jwtUtil.generateToken(request.getUsername());
//        return ResponseEntity.ok(jwt);
        try {
            authenticationManager.authenticate(token);
//            String jwt = jwtUtil.generateToken(request.getUsername());
            return ResponseEntity.ok("niceeeeee");
        } catch (AuthenticationException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
