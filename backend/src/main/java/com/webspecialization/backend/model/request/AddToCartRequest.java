package com.webspecialization.backend.model.request;

import lombok.Data;

@Data
public class AddToCartRequest {
    private long productVariantId;
    private int amount;
}
