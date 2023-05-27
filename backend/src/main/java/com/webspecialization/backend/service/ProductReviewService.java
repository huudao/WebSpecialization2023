package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Product;
import com.webspecialization.backend.entity.ProductReview;
import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.request.SaveProductReviewRequest;
import com.webspecialization.backend.model.request.UpdateReviewRequest;
import com.webspecialization.backend.model.response.ProductReviewResponse;
import com.webspecialization.backend.repo.ProductReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductReviewService {
    @Autowired
    private ProductReviewRepository productReviewRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private Converter converter;
    @Autowired
    private ProductService productService;

    public List<ProductReviewResponse> getProductReviews(int productId, int page, int size, String sortBy, String sortDirection) {
        Pageable pageable = PageRequest.of(page, size);
        if (sortBy != null && sortDirection != null) {
            Sort.Direction direction = Sort.Direction.fromString(sortDirection);
            pageable = PageRequest.of(page, size, direction, sortBy);
        }
        List<ProductReviewResponse> productReviews = productReviewRepository.findByProductId(productId, pageable)
                .stream()
                .map(converter::convertProductReviewToProductReviewResponse)
                .collect(Collectors.toList());
        return productReviews;
    }

    public void updateReview(UpdateReviewRequest updateReviewRequest) {
        ProductReview review = productReviewRepository.findById(updateReviewRequest.getReviewId());
        review.setReviewTitle(updateReviewRequest.getReviewTitle());
        review.setReview(updateReviewRequest.getReview());
        review.setRating(updateReviewRequest.getRating());
        review.setRecommend(review.isRecommend());
        Date now = new Date();
        review.setUpdatedDate(now);
        productReviewRepository.save(review);
    }

    public void saveProductReview(SaveProductReviewRequest reviewRequest) {
        User user = userService.getUser();
        Product product = productService.getProductById(reviewRequest.getProductId());
        if(product == null) throw new NotFoundException("product id is not exist");
        Date now = new Date();
        ProductReview p = new ProductReview();
        p.setProduct(product);
        p.setUser(user);
        p.setRating(reviewRequest.getRating());
        p.setReviewTitle(reviewRequest.getReviewTitle());
        p.setReview(reviewRequest.getReview());
        p.setLikeNumber(0);
        p.setDislikeNumber(0);
        p.setRecommend(reviewRequest.isRecommend());
        p.setCreatedDate(now);
        p.setUpdatedDate(now);
        productReviewRepository.save(p);
    }
}
