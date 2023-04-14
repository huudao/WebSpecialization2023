package com.webspecialization.backend.model.dto.cart;

import com.webspecialization.backend.model.dto.product.ProductVariantDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CartItemDTO {
    private int cartItemId;
    private ProductVariantDTO product;
    private int amount;
}
