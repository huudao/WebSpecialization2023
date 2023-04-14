package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.ProductReview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductReviewRepository extends JpaRepository<ProductReview, Integer> {
    List<ProductReview> findByProductProductId(int productId);

    ProductReview findByReviewId(int reviewId);
}
