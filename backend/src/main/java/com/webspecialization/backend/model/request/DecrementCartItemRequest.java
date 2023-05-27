package com.webspecialization.backend.model.request;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
public class DecrementCartItemRequest {
    @NotNull
    @Min(1)
    private int productVariantId;

    @NotNull
    @Min(1)
    private Integer amount;
}
