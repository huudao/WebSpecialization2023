package com.webspecialization.backend.service;

import com.webspecialization.backend.model.Brand;
import com.webspecialization.backend.model.Product;
import com.webspecialization.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    public List<Product> searchProductsByKeyword(String keyword) {
        List<Product> products = productRepository.findByNameContainingIgnoreCase(keyword);
        return products;
    }

    public List<Product> getLatestProducts() {
        // Get the latest 10 products
        Pageable pageable = PageRequest.of(0, 10, Sort.by("insertedAt").descending());
        return productRepository.findAll(pageable).getContent();
    }

    public List<Product> getMostViewProducts() {
        Pageable pageable = PageRequest.of(0, 10);
        List<Product> mostViewedProducts = productRepository.findMostViewedProducts(pageable);
//        Pageable pageable = PageRequest.of(0, 10, Sort.by("productViews").descending());
//        return productRepository.findAll(pageable).getContent();
        return mostViewedProducts;
    }

    public List<Product> getSuggestedProducts(int productId) {
        // Get list of products that have the same brand
        Brand b = productRepository.findById(productId).orElse(null).getBrand();
        List<Product> products = productRepository.findByBrand(b);
        return products;
    }


    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

//    public Product updateProduct(int id, Product updatedProduct) {
//        Product product = getProductById(id);
//        if (product == null) {
//            return null;
//        }
//        product.setName(updatedProduct.getName());
//        product.setDescription(updatedProduct.getDescription());
//        return repository.save(product);
//    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }



}
