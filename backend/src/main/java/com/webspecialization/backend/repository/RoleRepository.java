package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role getRoleByName(String name);
}
