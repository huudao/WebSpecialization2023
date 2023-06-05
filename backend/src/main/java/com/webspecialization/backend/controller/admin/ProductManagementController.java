package com.webspecialization.backend.controller.admin;

import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.model.request.AddProductRequest;
import com.webspecialization.backend.model.response.ProductResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/admin")
public class ProductManagementController {
    @Autowired
    ProductService productService;

    @GetMapping("/product")
    public ResponseEntity<?> getAllProducts() {
        List<ProductVariantResponse> products = productService.getAllProductVariants();
        return ResponseEntity.ok(products);
    }

    // su dung url nay khi nguoi dung click vào
    @GetMapping("/product/{id}")
    public ResponseEntity<ProductResponse> getProductDetail(@PathVariable Long id) {
        ProductResponse product = productService.getProductResponseById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/product")
    public ResponseEntity<List<ProductVariantResponse>> addProduct(@RequestBody AddProductRequest request) {
        List<ProductVariantResponse> products = productService.addProduct(request);
        return ResponseEntity.ok(products);
    }
    @DeleteMapping ("/product/variant/{idVariant}")
    public ResponseEntity<?> deleteProductVariant(@PathVariable Long idVariant) {
        List<ProductVariantResponse> products = productService.deleteProductVariant(idVariant);
        return ResponseEntity.ok(products);
    }
}
