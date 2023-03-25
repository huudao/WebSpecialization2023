package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    User getAccountByUsername(String username);
    User findUserByUsername(String username);
}
