package com.webspecialization.backend.service;

import com.webspecialization.backend.model.ProductReview;
import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.repository.ProductReviewRepository;
import com.webspecialization.backend.service.converter.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductReviewService {
    @Autowired
    private ProductReviewRepository productReviewRepository;
    @Autowired
    private Converter converter;

    public ProductReview addProductReview(ProductReview productReview) {
        return productReviewRepository.save(productReview);
    }

    public List<ProductReview> findByProductId(int productId) {
        return productReviewRepository.findByProductProductId(productId);
    }

    public List<ProductReviewDTO> getProductReviews(int productId) {
        List<ProductReviewDTO> productReviews = productReviewRepository.findByProductProductId(productId)
                .stream()
                .map(converter::convertProductReviewToDTO)
                .collect(Collectors.toList());
        return productReviews;
    }

    public void updateReview(ProductReviewDTO reviewDTO) {
        ProductReview review = productReviewRepository.findByReviewId(reviewDTO.getReviewId());
        review.setReviewTitle(reviewDTO.getReviewTitle());
        review.setReview(reviewDTO.getReview());
        review.setRating(review.getRating());
        review.setRecommend(review.isRecommend());
        Date now = new Date();
        review.setUpdatedAt(now);
        productReviewRepository.save(review);
    }
}
