package com.webspecialization.backend.model.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class AddProductVariant {
    private List<String> images;
    @NotNull(message = "size is mandatory")
    private String size;
    @NotNull(message = "price is mandatory")
    private float price;
    @NotNull(message = "stock is mandatory")
    private Integer stock;
    private float discount;
    boolean variantDefault = false;
}
