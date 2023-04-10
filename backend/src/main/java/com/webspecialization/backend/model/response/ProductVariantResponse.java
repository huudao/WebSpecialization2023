package com.webspecialization.backend.model.response;

import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDTO;
import lombok.Data;

@Data
public class ProductVariantResponse {
    private int id;
    private String name;
    private String url;
    private ProductVariantDTO productVariant;
    private ProductReviewDTO productReviewDTO;
}
