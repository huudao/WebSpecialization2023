package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.UserAddress;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {
}
