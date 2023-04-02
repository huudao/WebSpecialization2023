package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Discount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscountRepository extends JpaRepository<Discount, Integer> {
}
