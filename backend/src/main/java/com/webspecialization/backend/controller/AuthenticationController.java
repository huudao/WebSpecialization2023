package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.User;
import com.webspecialization.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController{
    @Autowired
    private AccountRepository repository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password){
        User account = repository.getAccountByUsername(username);
        if(account.getPassword().equals(password)) return ResponseEntity.ok("hello goodjob");
        else return (ResponseEntity<?>) ResponseEntity.notFound();
    }
}
