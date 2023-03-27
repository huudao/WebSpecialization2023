package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {
    Role getRoleByName(String name);
}
