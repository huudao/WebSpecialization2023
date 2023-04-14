package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Brand;
import com.webspecialization.backend.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAll();

    List<Product> findByNameContainingIgnoreCase(String keyword);

    @Query("SELECT p FROM Product p ORDER BY p.productViews DESC")
    List<Product> findMostViewedProducts(Pageable pageable);

    List<Product> findByBrand(Brand brand);
}
