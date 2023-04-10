package com.webspecialization.backend.model.dto.cart;

import lombok.Data;

import java.util.List;

@Data
public class CartDTO {
    private int cartId;
    private int userId;
    private List<CartItemDTO> cartItems;
}
