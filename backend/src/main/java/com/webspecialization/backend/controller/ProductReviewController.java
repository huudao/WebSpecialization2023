package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.request.SaveProductReviewRequest;
import com.webspecialization.backend.model.request.UpdateReviewRequest;
import com.webspecialization.backend.model.response.ProductReviewResponse;
import com.webspecialization.backend.service.ProductReviewService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductReviewController {
    @Autowired
    private ProductReviewService productReviewService;

    @GetMapping("/products/{productId}/reviews")
    public ResponseEntity<List<ProductReviewResponse>> getProductReviews(@PathVariable int productId,
                                                                         @RequestParam(value = "page", defaultValue = "0") Integer page,
                                                                         @RequestParam(value = "size", defaultValue = "50") Integer pageSize,
                                                                         @RequestParam(value = "sortBy", required = false) String sortBy,
                                                                         @RequestParam(value = "sortDirection", required = false) String sortDirection) {
        List<ProductReviewResponse> productReviews = productReviewService.getProductReviews(productId, page, pageSize,sortBy, sortDirection);
        return ResponseEntity.ok(productReviews);
    }


    @PostMapping("/products/{productId}/reviews")
    public ResponseEntity<?> review(@Valid @RequestBody SaveProductReviewRequest saveProductReviewRequest) {
        productReviewService.saveProductReview(saveProductReviewRequest);
        return ResponseEntity.ok().body("Comment added successfully");
    }

    @PutMapping("/products/{productId}/reviews")
    public ResponseEntity<?> updateReview(@RequestBody UpdateReviewRequest updateReviewRequest) {

        productReviewService.updateReview(updateReviewRequest);
        return ResponseEntity.ok().body("Update comment successfully");
    }
}
