package com.webspecialization.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product extends BaseEntity{
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "brand_id")
    private Brand brand;
    private String name;
    private String genderType;
    private String description;
    private String shippingPolicy;

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<ProductVariant> variants;

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<ProductReview> reviews;

    private int productViews = 0;

    public double averageRating() {
        if(reviews == null || reviews.isEmpty()) return 0;
        int count = 0;
        double total = 0;
        for(ProductReview pR : reviews) {
            total += pR.getRating();
            count++;
        }
        return total/count;
    }
}
