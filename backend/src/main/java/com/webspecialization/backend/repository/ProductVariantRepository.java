package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Product;
import com.webspecialization.backend.model.ProductVariant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductVariantRepository extends JpaRepository<ProductVariant,Integer> {
}
