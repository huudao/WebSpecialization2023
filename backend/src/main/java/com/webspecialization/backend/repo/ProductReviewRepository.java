package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.ProductReview;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductReviewRepository extends JpaRepository<ProductReview, Long> {
    List<ProductReview> findByProductId(long productId, Pageable pageable);

    ProductReview findById(int reviewId);
}
