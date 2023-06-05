package com.webspecialization.backend.controller.admin;

import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.model.request.AddProductRequest;
import com.webspecialization.backend.model.response.ProductResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/admin")
public class ProductManagementController {
    @Autowired
    ProductService productService;

    @GetMapping("/products")
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

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductResponse> getProductDetail(@PathVariable Long id) {
        ProductResponse product = productService.getProductResponseById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/products")
    public ResponseEntity<List<ProductVariantResponse>> addProduct(@RequestBody AddProductRequest request) {
        List<ProductVariantResponse> products = productService.addProduct(request);
        return ResponseEntity.ok(products);
    }

    @PutMapping("/products")
    public ResponseEntity<List<ProductVariantResponse>> updateProduct(@RequestBody AddProductRequest request) {
        List<ProductVariantResponse> products = productService.addProduct(request);
        return ResponseEntity.ok(products);
    }

    @DeleteMapping ("/products/{id}")
    public ResponseEntity<List<ProductVariantResponse>> deleteProduct(@PathVariable Long id) {
        List<ProductVariantResponse> products = productService.deleteProduct(id);
        return ResponseEntity.ok(products);
    }
}
