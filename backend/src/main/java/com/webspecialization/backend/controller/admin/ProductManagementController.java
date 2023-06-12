package com.webspecialization.backend.controller.admin;

import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.model.dto.ProductVariantDTO;
import com.webspecialization.backend.model.request.AddProductRequest;
import com.webspecialization.backend.model.request.AddProductVariant;
import com.webspecialization.backend.model.request.UpdateProductRequest;
import com.webspecialization.backend.model.response.ProductResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class ProductManagementController {
    @Autowired
    ProductService productService;

    @GetMapping("/product")
    public ResponseEntity<List<ProductResponse>> getAllProductsForAdmin() {
        List<ProductResponse> products = productService.getAllProductsForAdmin();
        return ResponseEntity.ok(products);
    }

    @PostMapping("/product")
    public ResponseEntity<List<ProductVariantResponse>> addProduct(@Valid @RequestBody AddProductRequest request) {
        List<ProductVariantResponse> products = productService.addProduct(request);
        return ResponseEntity.ok(products);
    }

    // su dung url nay khi nguoi dung click vào
    @GetMapping("/product/{id}")
    public ResponseEntity<List<ProductVariantResponse>> getProductVariantsByProductId(@PathVariable Long id) {
        List<ProductVariantResponse> productList = productService.getProductVariantsByProductId(id);
        return ResponseEntity.ok(productList);
    }

    // add product variant
    @PostMapping  ("/product/{id}")
    public ResponseEntity<?> addProductVariant(@PathVariable long id, @Valid @RequestBody AddProductVariant addProductVariant) {
        List<ProductVariantResponse> productVariantListResponse = productService.addProductVariant(id, addProductVariant);
        return ResponseEntity.ok(productVariantListResponse);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<List<ProductResponse>> updateProduct(@PathVariable long id, @Valid @RequestBody UpdateProductRequest updateProductRequest) {
        List<ProductResponse> products = productService.updateProductById(id, updateProductRequest);
        return ResponseEntity.ok(products);
    }

    // delete product
    @DeleteMapping ("/product/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable Long id) {
        List<ProductResponse> products = productService.deleteProductById(id);
        return ResponseEntity.ok(products);
    }

    @PutMapping("/product/{productId}/{productVariantId}")
    public ResponseEntity<List<ProductVariantResponse>> updateProductVariant(@PathVariable Long productId, @PathVariable Long productVariantId, @RequestBody ProductVariantDTO productVariantDTO) {
        List<ProductVariantResponse> productVariantListResponse = productService.updateProductVariant(productId, productVariantId, productVariantDTO);
        return ResponseEntity.ok(productVariantListResponse);
    }

    // delete product variant
    @DeleteMapping ("/product/{productId}/{productVariantId}")
    public ResponseEntity<?> deleteProductVariant(@PathVariable Long productId, @PathVariable Long productVariantId) {
        List<ProductVariantResponse> productVariantListResponse = productService.deleteProductVariant(productId, productVariantId);
        return ResponseEntity.ok(productVariantListResponse);
    }
}
