package com.webspecialization.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDTO {
    private Long cartItemId;
    private String imgUrl;
    private String brandName;
    private String name;
    private String size;
    private float regularPrice;
    private float priceAfterDiscount;
    private int amount;
    private float totalPrice;
    private int stock;
}
