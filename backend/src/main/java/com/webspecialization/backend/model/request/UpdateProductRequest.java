package com.webspecialization.backend.model.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdateProductRequest {
    @NotNull(message = "brandId is mandatory")
    long brandId;
    @NotNull(message = "name is mandatory")
    @NotBlank(message = "name is mandatory")
    String name;
    String genderType;
    String description;
    String shippingPolicy;
}
