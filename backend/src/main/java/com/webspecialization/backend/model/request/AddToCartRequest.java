package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
public class AddToCartRequest {
    @Valid
    @Min(value = 1, message = "Product variant ID must be a positive number")
    private long productVariantId;

    @Min(value = 1, message = "Amount must be a positive number")
    private int amount;
}
