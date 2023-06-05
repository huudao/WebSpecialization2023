package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class IncrementCartItemRequest {
    @NotNull
    @Min(1)
    private int cartItemId;
    @NotNull
    @Min(1)
    private int amount;
}
