package com.webspecialization.backend.model.request;

import com.webspecialization.backend.model.dto.ProductVariantDTO;
import lombok.Data;

import java.util.List;

@Data
public class AddProductRequest {
    long productId;
    long brandId;
    String name;
    String genderType;
    String description;
    String shippingPolicy;
    List<ProductVariantDTO> productVariantList;
}
