package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    UserRole findByUser(User user);
}
