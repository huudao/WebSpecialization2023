package com.webspecialization.backend.model.dto.cart;

import lombok.Data;

@Data
public class AddToCartDTO {
    private int variantId;
    private int amount;
}
