package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.Brand;
import com.webspecialization.backend.model.Product;
import com.webspecialization.backend.model.ProductReview;
import com.webspecialization.backend.model.User;
import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.model.dto.product.ProductDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDetailsDTO;
import com.webspecialization.backend.service.ProductReviewService;
import com.webspecialization.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
//@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductReviewService productReviewService;

    @GetMapping("")
    public ResponseEntity<List<ProductVariantDTO>> getAllProducts() {
        try {
            List<ProductVariantDTO> products = productService.getAllProducts();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.notFound().build();
    }

    // Get detail of a product
    @GetMapping("/{productId}/{variantId}")
    public ResponseEntity<ProductVariantDetailsDTO> getProductVariantById(@PathVariable("productId") int productId, @PathVariable("variantId") int variantId) {
        ProductVariantDetailsDTO variantDTO = productService.getProductVariantById(productId,variantId);
        if(variantDTO == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(variantDTO);
    }

    @GetMapping("/{id}/recommended")
    public ResponseEntity<List<ProductVariantDTO>> getRecommendedProducts(@PathVariable("id") int productId) {
        List<ProductVariantDTO> recommendedProducts = productService.getRecommendedProducts(productId);
        return ResponseEntity.ok(recommendedProducts);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProductVariantDTO>> searchProductsByKeyword(@RequestParam String keyword) {
        List<ProductVariantDTO> products = productService.searchProductsByKeyword(keyword);
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
    public ResponseEntity<List<ProductVariantDTO>> getProductsByBrandId(@PathVariable("brandId") int brandId) {
        List<ProductVariantDTO> products = productService.getProductsByBrandId(brandId);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/latest")
    public ResponseEntity<List<ProductVariantDTO>> getLatestProducts() {
        List<ProductVariantDTO> latestProducts = productService.getLatestProducts();
        return ResponseEntity.ok(latestProducts);
    }

    @GetMapping("/most-viewed")
    public ResponseEntity<List<ProductVariantDTO>> getMostViewedProducts() {
        // Get the 10 most viewed products
        List<ProductVariantDTO> mostViewedProducts = productService.getMostViewProducts();
        return ResponseEntity.ok(mostViewedProducts);
    }

    @GetMapping("/{productId}/reviews")
    public ResponseEntity<List<ProductReviewDTO>> getProductReviews(@PathVariable int productId) {
        List<ProductReviewDTO> productReviews = productReviewService.getProductReviews(productId);
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
