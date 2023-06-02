package com.webspecialization.backend.model.dto;

import lombok.Data;

@Data
public class DiscountDTO {
    private String name;
    private String description;
    private int discountPercentage;
}
