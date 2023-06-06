package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ApplyDiscountRequest {
    @Valid
    @NotNull(message = "Discount code is required")
    @NotBlank(message = "Discount code must not be blank")
    private String discountCode;
}