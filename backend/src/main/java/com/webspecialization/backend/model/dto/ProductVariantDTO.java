package com.webspecialization.backend.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class ProductVariantDTO {
    List<String> imageList;
    String size;
    float price;
    int stock;
    float discount;
    boolean variantDefault;
}
