package com.webspecialization.backend.model.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ProductVariantResponse {
    private Long productId;
    private Long variantId;
    private Long brandId;
    private String brandName;
    private String name;
    private String size;
    private int sellCount;
    private float price;
    private float priceAfterDiscount;
    private float discount;
    private Integer stock;
    private List<String> imageUrls;
    private double averageRating;
}
