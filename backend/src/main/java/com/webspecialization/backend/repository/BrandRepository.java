package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
    Brand findByBrandId(int brandId);
}
