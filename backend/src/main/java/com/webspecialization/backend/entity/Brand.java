package com.webspecialization.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Table(name = "brands")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Brand extends BaseEntity{
    private String name;
    private String imageUrl;
    private String description;

    @OneToMany(mappedBy = "brand", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>();
}
