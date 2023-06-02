package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUser() {
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        if(Objects.isNull(userName)){
            throw new RuntimeException("Invalid access");
        }

        Optional<User> user = userRepository.findUserByUsername(userName);
        if (user.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        return user.get();
    }
}
