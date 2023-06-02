package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.ProductVariant;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.response.ProductDetailsResponse;
import com.webspecialization.backend.model.response.ProductVariantResponse;
import com.webspecialization.backend.repo.ProductVariantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductVariantService {
    @Autowired
    ProductVariantRepository repository;

    @Autowired
    Converter converter;

    public ProductVariant findById(long productVariantId) {
        return repository.findById(productVariantId).orElse(null);
    }

    public List<ProductVariantResponse> findProductVariantsByVariantDefaultTrue(int page, int size, String sortBy, String sortDirection){
        Pageable pageable = PageRequest.of(page, size);
        if (sortBy != null && sortDirection != null) {
            Sort.Direction direction = Sort.Direction.fromString(sortDirection);
            pageable = PageRequest.of(page, size, direction, sortBy);
        }
        List<ProductVariant> productVariantList = repository.findProductVariantsByVariantDefaultIsTrue(pageable);
        List<ProductVariantResponse> productVariantResponses = productVariantList.stream()
                .map(converter::convertProductVariantToProductVariantResponse)
                .collect(Collectors.toList());
        return productVariantResponses;
    }
    public List<ProductVariantResponse> findProductVariantsByGender(String gender, int page, int size, String sortBy, String sortDirection) {
        Pageable pageable = PageRequest.of(page, size);
        if (sortBy != null && sortDirection != null) {
            Sort.Direction direction = Sort.Direction.fromString(sortDirection);
            pageable = PageRequest.of(page, size, direction, sortBy);
        }
        List<ProductVariant> productVariantList = repository.findProductVariantsByGender(gender,pageable);
        List<ProductVariantResponse> productVariantResponses = productVariantList.stream()
                .map(converter::convertProductVariantToProductVariantResponse)
                .collect(Collectors.toList());
        return productVariantResponses;
    }

    public ProductDetailsResponse findProductVariantDetailsById(Long id) {
        ProductVariant productVariant = repository.findProductVariantsById(id);
        if(productVariant == null) throw new NotFoundException("Variant id not found");
        ProductDetailsResponse productDetailsResponse = converter.convertProductVariantToProductDetailsResponse(productVariant);
        return productDetailsResponse;
    }

    public List<ProductVariantResponse> searchProductsByKeyword(String keyword) {
        List<ProductVariant> productVariantList = repository.findProductVariantByKeyword(keyword);
        List<ProductVariantResponse> productVariantResponses = productVariantList.stream()
                .map(converter::convertProductVariantToProductVariantResponse)
                .collect(Collectors.toList());
        return productVariantResponses;
    }

    public List<ProductVariantResponse> findProductsByBrandId(long brandId) {
        List<ProductVariant> productVariantList = repository.findProductVariantByBrandId(brandId);
        List<ProductVariantResponse> productVariantResponses = productVariantList.stream()
                .map(converter::convertProductVariantToProductVariantResponse)
                .collect(Collectors.toList());
        return productVariantResponses;
    }

    public List<ProductVariantResponse> findProductsHaveMostViews() {
        Pageable pageable = PageRequest.of(0, 10);
        List<ProductVariantResponse> productVariantResponses = repository.findProductVariantsHaveMostViews(pageable).stream()
                .map(converter::convertProductVariantToProductVariantResponse)
                .collect(Collectors.toList());
        return productVariantResponses;
    }


}
