package com.webspecialization.backend.service;

import com.webspecialization.backend.model.Brand;
import com.webspecialization.backend.model.Product;
import com.webspecialization.backend.model.ProductReview;
import com.webspecialization.backend.model.User;
import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.repository.BrandRepository;
import com.webspecialization.backend.repository.ProductRepository;
import com.webspecialization.backend.repository.ProductReviewRepository;
import com.webspecialization.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductReviewRepository productReviewRepository;

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

    public List<Brand> getBrands() {
        List<Brand> brands = brandRepository.findAll();
        return brands;
    }

    public List<Product> getProductsByBrandId(int brandId) {
        Brand b = brandRepository.findByBrandId(brandId);
        return productRepository.findByBrand(b);
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

    public List<Product> getRecommendedProducts(int productId) {
        // Get list of products that have the same brand
        Brand b = productRepository.findById(productId).orElse(null).getBrand();
        List<Product> products = productRepository.findByBrand(b);
        return products;
    }

    public void saveProductReviewDTO(ProductReviewDTO reviewDTO) {
        User user = userRepository.findUserByUsername(reviewDTO.getUsername());
        Product product = getProductById(reviewDTO.getProductId());
        Date now = new Date();
        ProductReview p = new ProductReview();
        p.setProduct(product);
        p.setUser(user);
        p.setRating(reviewDTO.getRating());
        p.setReviewTitle(reviewDTO.getReviewTitle());
        p.setReview(reviewDTO.getReview());
        p.setLikeNumber(0);
        p.setDislikeNumber(0);
        p.setRecommend(reviewDTO.isRecommend());
        p.setInsertedAt(now);
        p.setUpdatedAt(now);
        productReviewRepository.save(p);
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
