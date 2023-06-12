package com.webspecialization.backend.model.response;

import lombok.Data;

import java.util.Date;

@Data
public class BrandResponse {
    private Long id;
    private String name;
    private String imageUrl;
    private String description;
    private Date createdDate;
    private Date updatedDate;
}
