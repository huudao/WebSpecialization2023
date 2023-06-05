package com.webspecialization.backend.model.response;

import com.webspecialization.backend.entity.Brand;
import lombok.Data;

import java.util.List;

@Data
public class ProductResponse {
    private Long id;
    private String brandName;
    private String name;
    private String genderType;
    private String description;
    private String shippingPolicy;
    private List<ProductVariantDetailsResponse> variants;
    private double averageRating;
}
