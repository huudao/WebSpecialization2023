package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.Product;
import com.webspecialization.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

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

    @GetMapping("/{id}/suggested")
    public ResponseEntity<List<Product>> getSuggestedProducts(@PathVariable("id") int productId) {
        List<Product> suggestedProducts = productService.getSuggestedProducts(productId);
        return ResponseEntity.ok(suggestedProducts);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProductsByKeyword(@RequestParam String keyword) {
        List<Product> products = productService.searchProductsByKeyword(keyword);
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


//    @GetMapping("/{productId}/ratings")
//    public ResponseEntity<List<ProductReviewDto>> getProductRatings(@PathVariable Long productId) {
//        List<ProductReviewDto> productReviews = productReviewService.findByProductId(productId)
//                .stream()
//                .map(this::EntityToDto)
//                .collect(Collectors.toList());
//        return ResponseEntity.ok(productReviews);
//    }

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
