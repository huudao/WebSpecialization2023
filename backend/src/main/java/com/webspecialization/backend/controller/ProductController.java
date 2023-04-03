package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.Brand;
import com.webspecialization.backend.model.Product;
import com.webspecialization.backend.model.ProductReview;
import com.webspecialization.backend.model.User;
import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.service.ProductReviewService;
import com.webspecialization.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductReviewService productReviewService;

    @GetMapping("")
    public ResponseEntity<List<Product>> getAllProducts() {
        try {
            List<Product> products = productService.getAllProducts();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.notFound().build();
    }

    // Get detail of a product
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") int id) {
        Product product = productService.getProductById(id);
        if(product == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(product);
    }

    @GetMapping("/{id}/recommended")
    public ResponseEntity<List<Product>> getRecommendedProducts(@PathVariable("id") int productId) {
        List<Product> recommendedProducts = productService.getRecommendedProducts(productId);
        return ResponseEntity.ok(recommendedProducts);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProductsByKeyword(@RequestParam String keyword) {
        List<Product> products = productService.searchProductsByKeyword(keyword);
        return ResponseEntity.ok(products);
    }

    // get all brands
    @GetMapping("/brands")
    public ResponseEntity<List<Brand>> getBrands() {
        List<Brand> brands = productService.getBrands();
        return ResponseEntity.ok(brands);
    }

    // get products by brandId
    @GetMapping("/brands/{brandId}")
    public ResponseEntity<List<Product>> getProductsByBrandId(@PathVariable("brandId") int brandId) {
        List<Product> products = productService.getProductsByBrandId(brandId);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/latest")
    public ResponseEntity<List<Product>> getLatestProducts() {
        List<Product> latestProducts = productService.getLatestProducts();
        return ResponseEntity.ok(latestProducts);
    }

    @GetMapping("/most-viewed")
    public ResponseEntity<List<Product>> getMostViewedProducts() {
        // Get the 10 most viewed products
        List<Product> mostViewedProducts = productService.getMostViewProducts();
        return ResponseEntity.ok(mostViewedProducts);
    }

    @GetMapping("/{productId}/reviews")
    public ResponseEntity<List<ProductReviewDTO>> getProductReviews(@PathVariable int productId) {
        List<ProductReviewDTO> productReviews = productReviewService.findByProductId(productId)
                .stream()
                .map(this::EntityToDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(productReviews);
    }

    @PostMapping("/{productId}/reviews")
    public ResponseEntity<?> review(@RequestBody ProductReviewDTO reviewDTO) {

        productService.saveProductReviewDTO(reviewDTO);

        return ResponseEntity.ok().body("Comment added successfully");
    }

    @PutMapping("/{productId}/reviews")
    public ResponseEntity<?> updateReview(@RequestBody ProductReviewDTO reviewDTO) {
        productReviewService.updateReview(reviewDTO);
        return ResponseEntity.ok().body("Comment added successfully");
    }

    public ProductReviewDTO EntityToDto(ProductReview productReview) {
        ProductReviewDTO productReviewDto = new ProductReviewDTO();
        productReviewDto.setReviewId(productReview.getReviewId());
        productReviewDto.setUsername(productReview.getUser().getUsername());
        productReviewDto.setProductId(productReview.getProduct().getProductId());
        productReviewDto.setRating(productReview.getRating());
        productReviewDto.setReviewTitle(productReview.getReviewTitle());
        productReviewDto.setReview(productReview.getReview());
        productReviewDto.setLikeNumber(productReview.getLikeNumber());
        productReviewDto.setDislikeNumber(productReview.getDislikeNumber());
        productReviewDto.setRecommend(productReview.isRecommend());
        productReviewDto.setInsertedAt(productReview.getInsertedAt());
        productReviewDto.setUpdatedAt(productReview.getUpdatedAt());
        return productReviewDto;
    }

    // Delete a product
//    @DeleteMapping ("/{id}")
//    public ResponseEntity<Product> deleteProductById(@PathVariable("id") int id) {
//        try{
//            productService.deleteProduct(id);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        return ResponseEntity.ok().build();
//    }



}
