package com.webspecialization.backend.model.response;

import lombok.Data;

@Data
public class BrandResponse {
    private Long id;
    private String name;
    private String imageUrl;
    private String description;
}
