package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Product;
import com.webspecialization.backend.model.response.ProductDetailsResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductVariantService productVariantService;
    @Autowired
    private Converter converter;

    public List<ProductVariantResponse> getAllProducts(int page, int size, String sortBy, String sortDirection) {
        List<ProductVariantResponse> products = productVariantService.findProductVariantsByVariantDefaultTrue(page,size, sortBy, sortDirection);
        return products;
    }

    public List<ProductVariantResponse> getProductVariantsByGender(String gender, int page, int size, String sortBy, String sortDirection) {
        List<ProductVariantResponse> products = productVariantService.findProductVariantsByGender(gender, page,size, sortBy, sortDirection);
        return products;
    }

    public Product getProductById(long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }
//
    public ProductDetailsResponse findProductVariantById(long productId, long variantId) {
        return productVariantService.findProductVariantDetailsById(variantId);
    }

    public List<ProductVariantResponse> searchProductsByKeyword(String keyword) {
        List<ProductVariantResponse> products = productVariantService.searchProductsByKeyword(keyword);
        return products;
    }

    public List<ProductVariantResponse> getRecommendedProducts(int productId) {
        // Get the latest 10 products
        return productVariantService.findProductVariantsByVariantDefaultTrue(0,10,"createdDate","desc");
    }


    public List<ProductVariantResponse> findLatestProducts() {
        // Get the latest 10 products
        return productVariantService.findProductVariantsByVariantDefaultTrue(0,10,"createdDate","desc");
    }

    public List<ProductVariantResponse> findMostViewProducts() {
        return productVariantService.findProductsHaveMostViews();
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

////    public Product updateProduct(int id, Product updatedProduct) {
////        Product product = getProductById(id);
////        if (product == null) {
////            return null;
////        }
////        product.setName(updatedProduct.getName());
////        product.setDescription(updatedProduct.getDescription());
////        return repository.save(product);
////    }
//
//    public void deleteProduct(int id) {
//        productRepository.deleteById(id);
//    }
//

}