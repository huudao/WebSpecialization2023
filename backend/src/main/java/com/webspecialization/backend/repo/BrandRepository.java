package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository  extends JpaRepository<Brand, Long> {
}
