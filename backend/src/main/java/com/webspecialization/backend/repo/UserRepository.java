package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByUsername(String username);
    User findUserByEmail(String email);

    User getUserByResetPasswordToken(String token);
}
