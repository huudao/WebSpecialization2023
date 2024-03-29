package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DiscountRepository extends JpaRepository<Discount, Long> {

    Optional<Discount> findByDiscountCode(String discountCode);
}
