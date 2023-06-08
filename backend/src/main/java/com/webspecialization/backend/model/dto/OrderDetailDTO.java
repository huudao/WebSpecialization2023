package com.webspecialization.backend.model.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class OrderDetailDTO {
    Long id;
    String imageUrl;
    String productName;
    String size;
    float price;
    float priceAfterDiscount;
    int amount;
}
