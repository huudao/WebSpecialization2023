package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.response.*;
import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.service.BrandService;
import com.webspecialization.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private BrandService brandService;


    @GetMapping("")
    public ResponseEntity<List<ProductVariantResponse>> getAllProducts(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                                       @RequestParam(value = "size", defaultValue = "50") Integer pageSize,
                                                                       @RequestParam(value = "sortBy", required = false) String sortBy,
                                                                       @RequestParam(value = "sortDirection", required = false) String sortDirection) {

        if (Objects.isNull(page) || page < 0) {
            throw new InvalidArgumentException("Invalid page");
        }
        if (Objects.isNull(pageSize) || pageSize < 0) {
            throw new InvalidArgumentException("Invalid pageSize");
        }

        List<ProductVariantResponse> products = productService.getAllProducts(page,pageSize, sortBy, sortDirection);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/for-men")
    public ResponseEntity<List<ProductVariantResponse>> getProductsForMen(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                                          @RequestParam(value = "size", defaultValue = "50") Integer pageSize,
                                                                          @RequestParam(value = "sortBy", required = false) String sortBy,
                                                                          @RequestParam(value = "sortDirection", required = false) String sortDirection) {
        if (Objects.isNull(page) || page < 0) {
            throw new InvalidArgumentException("Invalid page");
        }
        if (Objects.isNull(pageSize) || pageSize < 0) {
            throw new InvalidArgumentException("Invalid pageSize");
        }

        List<ProductVariantResponse> products = productService.getProductVariantsByGender("MEN", page,pageSize, sortBy, sortDirection);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/for-women")
    public ResponseEntity<List<ProductVariantResponse>> getProductsForWomen(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                                            @RequestParam(value = "size", defaultValue = "50") Integer pageSize,
                                                                            @RequestParam(value = "sortBy", required = false) String sortBy,
                                                                            @RequestParam(value = "sortDirection", required = false) String sortDirection) {
        if (Objects.isNull(page) || page < 0) {
            throw new InvalidArgumentException("Invalid page");
        }
        if (Objects.isNull(pageSize) || pageSize < 0) {
            throw new InvalidArgumentException("Invalid pageSize");
        }

        List<ProductVariantResponse> products = productService.getProductVariantsByGender("WOMEN", page,pageSize, sortBy, sortDirection);
        return ResponseEntity.ok(products);
    }

    // Get detail of a product
    @GetMapping("/{productId}/{variantId}")
    public ResponseEntity<ProductDetailsResponse> findProductVariantById(@PathVariable("productId") long productId, @PathVariable("variantId") long variantId) {
        ProductDetailsResponse productDetails = productService.findProductVariantById(productId,variantId);
        return ResponseEntity.ok(productDetails);
    }

    @GetMapping("/{id}/recommended")
    public ResponseEntity<List<ProductVariantResponse>> getRecommendedProducts(@PathVariable("id") int productId) {
        List<ProductVariantResponse> recommendedProducts = productService.getRecommendedProducts(productId);
        return ResponseEntity.ok(recommendedProducts);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProductVariantResponse>> searchProductsByKeyword(@RequestParam String keyword) {
        List<ProductVariantResponse> products = productService.searchProductsByKeyword(keyword);
        return ResponseEntity.ok(products);
    }

    // get all brands
    @GetMapping("/brands")
    public ResponseEntity<List<BrandResponse>> getBrands() {
        List<BrandResponse> brands = brandService.getBrands();
        return ResponseEntity.ok(brands);
    }

    // get products by brandId
    @GetMapping("/brands/{brandId}")
    public ResponseEntity<List<ProductVariantResponse>> getProductsByBrandId(@PathVariable("brandId") int brandId) {
        List<ProductVariantResponse> products = brandService.findProductsByBrandId(brandId);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/latest")
    public ResponseEntity<List<ProductVariantResponse>> findLatestProducts() {
        List<ProductVariantResponse> latestProducts = productService.findLatestProducts();
        return ResponseEntity.ok(latestProducts);
    }

    @GetMapping("/most-viewed")
    public ResponseEntity<List<ProductVariantResponse>> findMostViewedProducts() {
        // Get the 10 most viewed products
        List<ProductVariantResponse> mostViewedProducts = productService.findMostViewProducts();
        return ResponseEntity.ok(mostViewedProducts);
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
