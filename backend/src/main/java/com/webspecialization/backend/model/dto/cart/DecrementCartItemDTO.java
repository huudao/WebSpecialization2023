package com.webspecialization.backend.model.dto.cart;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class DecrementCartItemDTO {
    @NotNull
    @Min(1)
    private int variantId;

    @NotNull
    @Min(1)
    private Integer amount;
}