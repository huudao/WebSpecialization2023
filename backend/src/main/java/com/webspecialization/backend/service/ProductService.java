package com.webspecialization.backend.service;

import com.webspecialization.backend.model.*;
import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDetailsDTO;
import com.webspecialization.backend.repository.*;
import com.webspecialization.backend.service.converter.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    @Autowired
    private ProductVariantRepository productVariantRepository;
    @Autowired
    private Converter converter;

    public List<ProductVariantDTO> getAllProducts() {
        List<ProductVariantDTO> products = productRepository.findAll()
                .stream()
                .map(converter::convertProductToProductVariantDTODefault)
                .collect(Collectors.toList());
        return products;
    }

    public Product getProductById(int id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    public ProductVariantDetailsDTO getProductVariantById(int productId, int variantId) {
        Product p = productRepository.findById(productId).orElse(null);
        for (ProductVariant v : p.getVariants()) {
            if (v.getVariantId() == variantId) return converter.convertProductDetailsToDTO(p, v);
        }
        return null;
    }

    public List<ProductVariantDTO> searchProductsByKeyword(String keyword) {
        List<ProductVariantDTO> products = productRepository.findByNameContainingIgnoreCase(keyword)
                .stream()
                .map(converter::convertProductToProductVariantDTODefault)
                .collect(Collectors.toList());
        return products;
    }

    public List<Brand> getBrands() {
        List<Brand> brands = brandRepository.findAll();
        return brands;
    }

    public List<ProductVariantDTO> getProductsByBrandId(int brandId) {
        Brand b = brandRepository.findByBrandId(brandId);
        return productRepository.findByBrand(b).stream()
                .map(converter::convertProductToProductVariantDTODefault)
                .collect(Collectors.toList());
    }

    public List<ProductVariantDTO> getLatestProducts() {
        // Get the latest 10 products
        Pageable pageable = PageRequest.of(0, 10, Sort.by("insertedAt").descending());
        return productRepository.findAll(pageable).getContent().stream()
                .map(converter::convertProductToProductVariantDTODefault)
                .collect(Collectors.toList());
    }

    public List<ProductVariantDTO> getMostViewProducts() {
        Pageable pageable = PageRequest.of(0, 10);
        List<ProductVariantDTO> mostViewedProducts = productRepository.findMostViewedProducts(pageable)
                .stream()
                .map(converter::convertProductToProductVariantDTODefault)
                .collect(Collectors.toList());

//        Pageable pageable = PageRequest.of(0, 10, Sort.by("productViews").descending());
//        return productRepository.findAll(pageable).getContent();
        return mostViewedProducts;
    }

    public List<ProductVariantDTO> getRecommendedProducts(int productId) {
        // Get list of products that have the same brand
        Brand b = productRepository.findById(productId).orElse(null).getBrand();
        List<ProductVariantDTO> products = productRepository.findByBrand(b)
                .stream()
                .map(converter::convertProductToProductVariantDTODefault)
                .collect(Collectors.toList());
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
