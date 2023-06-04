package com.webspecialization.backend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product_variants")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductVariant extends BaseEntity{

    @OneToMany(mappedBy = "productVariant", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    List<Image> images = new ArrayList<>();

    @Column(name = "size")
    private String size;

    @Column(name = "price")
    private float price;

    @Column(name = "stock")
    private Integer stock;

    private int sellCount;

    private float discount;

    private boolean variantDefault;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Product product;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProductVariant that)) return false;
        return getId().equals(that.getId());
    }
}
