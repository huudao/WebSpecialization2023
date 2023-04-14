package com.webspecialization.backend.model.dto.product;

import com.webspecialization.backend.model.ProductVariant;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class ProductVariantDetailsDTO {
    private Integer productId;
    private ProductVariant productVariant;
    private String brandName;
    private String name;
    private String genderType;
    private String description;
    private String imageUrl;
    private String shippingPolicy;
    private double averageRating;
    private List<ProductVariant> variants;
}
