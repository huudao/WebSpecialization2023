package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<User, String> {

    User getAccountByUsername(String username);
}
