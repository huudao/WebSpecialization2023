package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Brand;
import com.webspecialization.backend.entity.Product;
import com.webspecialization.backend.entity.ProductVariant;
import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.dto.ProductVariantDTO;
import com.webspecialization.backend.model.request.AddProductRequest;
import com.webspecialization.backend.model.response.ProductDetailsResponse;
import com.webspecialization.backend.model.response.ProductResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.repo.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductVariantService productVariantService;
    @Autowired
    private Converter converter;
    @Autowired
    private BrandService brandService;


    public List<ProductVariantResponse> getAllProductVariants() {
        List<ProductVariantResponse> products = productVariantService.findAllProductVariants();
        return products;
    }
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

//    For admin
    public List<ProductVariantResponse> addProduct(AddProductRequest request) {
        if(checkExists(request.getName(), request.getBrandId())){
            throw new InvalidArgumentException("Product have already existed");
        }
        Product newProduct = new Product();
        Brand brand = brandService.findById(request.getBrandId());
        if (brand == null) throw new NotFoundException("Brand id not found");
        newProduct.setBrand(brand);
        newProduct.setName(request.getName());
        newProduct.setGenderType(request.getGenderType());
        newProduct.setDescription(request.getDescription());
        newProduct.setShippingPolicy(request.getShippingPolicy());
        newProduct.setCreatedDate(new Date());
        newProduct.setUpdatedDate(new Date());

        List<ProductVariant> productVariantList = request.getProductVariantList().stream()
                .map(converter::convertProductVariantDTOToProductVariant).collect(Collectors.toList());
        newProduct.setVariants(productVariantList);

        for(ProductVariant productVariant : productVariantList){
            productVariant.setProduct(newProduct);
            productVariant.setCreatedDate(new Date());
        }
        productRepository.save(newProduct);

        return getAllProducts(0,10, null,null);
    }

    private boolean checkExists(String name, long brandId) {
        if(productRepository.findProductByNameAndBrand_Id(name, brandId) != null){
            return true;
        }
        return false;
    }

    public ProductResponse getProductResponseById(Long id) {
        Product product = productRepository.findById(id).orElse(null);
        if(product == null) throw new NotFoundException("Product not found");
        ProductResponse productResponse = converter.convertProductToProductResponse(product);
        return productResponse;
    }

    public ProductResponse updateProduct(AddProductRequest request) {
        Product updatedProduct = productRepository.findById(request.getProductId()).orElse(null);
        Date createdDate = updatedProduct.getCreatedDate();
        productRepository.delete(updatedProduct);


        Product newProduct = new Product();
        Brand brand = brandService.findById(request.getBrandId());
        if (brand == null) throw new NotFoundException("Brand id not found");
        newProduct.setBrand(brand);
        newProduct.setName(request.getName());
        newProduct.setGenderType(request.getGenderType());
        newProduct.setDescription(request.getDescription());
        newProduct.setShippingPolicy(request.getShippingPolicy());
        newProduct.setCreatedDate(createdDate);
        newProduct.setUpdatedDate(new Date());

        List<ProductVariant> productVariantList = request.getProductVariantList().stream()
                .map(converter::convertProductVariantDTOToProductVariant).collect(Collectors.toList());
        newProduct.setVariants(productVariantList);

        for(ProductVariant productVariant : productVariantList){
            productVariant.setProduct(newProduct);
            productVariant.setCreatedDate(createdDate);
            productVariant.setUpdatedDate(new Date());
        }
        productRepository.save(newProduct);
        return converter.convertProductToProductResponse(newProduct);
    }
    public List<ProductVariantResponse> deleteProductVariant(long id) {
        ProductVariant variant = productVariantService.findById(id);
        if(variant.getProduct().getVariants().size() == 1) {
            productRepository.delete(variant.getProduct());
        } else{
        productVariantService.deleteById(id);}
        return getAllProductVariants();
    }


}