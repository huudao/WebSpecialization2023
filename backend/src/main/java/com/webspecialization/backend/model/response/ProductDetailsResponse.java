package com.webspecialization.backend.model.response;

import lombok.Data;

import java.util.List;

@Data
public class ProductDetailsResponse {
    private Long productId;
    private Long variantId;
    private Long brandId;
    private String brandName;
    private String name;
    private String description;
    private String shippingPolicy;
    private List<String> imageUrls;
    private List<ProductVariantDetailsResponse> variants;
    private double averageRating;
}
