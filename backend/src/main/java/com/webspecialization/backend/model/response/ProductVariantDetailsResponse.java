package com.webspecialization.backend.model.response;

import lombok.Data;

@Data
public class ProductVariantDetailsResponse {
    private Long productId;
    private Long variantId;
    private String size;
    private float price;
    private float priceAfterDiscount;
    private float discount;
    private Integer stock;
}