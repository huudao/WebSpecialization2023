package com.webspecialization.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "discounts")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Discount extends BaseEntity{
    private String discountCode;
    private String name;
    private String description;
    private int discountPercentage;
    private boolean active = true;
}
