package com.webspecialization.backend.model.dto.product;

import com.webspecialization.backend.model.Brand;
import com.webspecialization.backend.model.ProductVariant;
import lombok.Data;

import java.util.List;

@Data
public class ProductVariantDTO {
    private Integer productId;
    private ProductVariant productVariant;
    private String brandName;
    private String name;
    private String imageUrl;
    private double averageRating;
}
