package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    User getAccountByUsername(String username);
    User  getUserByResetPasswordToken(String username);
    User findUserByUsername(String username);
    User findUserByEmail(String email);
}
