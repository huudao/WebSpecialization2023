package com.webspecialization.backend.model.response;

import com.webspecialization.backend.model.dto.CartItemDTO;
import com.webspecialization.backend.model.dto.DiscountDTO;
import lombok.Data;

import java.util.List;

@Data
public class CartResponse {
    private List<CartItemDTO> cartItems;
    private float totalCartPrice;
    private float totalPrice;
    private DiscountDTO discount;
}
