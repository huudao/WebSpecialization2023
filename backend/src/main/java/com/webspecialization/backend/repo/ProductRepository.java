package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.Brand;
import com.webspecialization.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByNameAndBrand_Id(String name, Long brandId);
}
