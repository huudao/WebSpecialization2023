package com.webspecialization.backend.model.request;

import com.webspecialization.backend.model.dto.ProductVariantDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class AddProductRequest {
    @Valid
    long productId;
    @NotNull(message = "brandId is mandatory")
    long brandId;
    @NotNull(message = "name is mandatory")
    @NotBlank(message = "name is mandatory")
    String name;
    String genderType;
    String description;
    String shippingPolicy;
    List<ProductVariantDTO> productVariantList;
}
