package com.webspecialization.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
public class Order extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetail> orderDetailList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "address_id")
    private UserAddress userAddress;

    @ManyToOne
    @JoinColumn(name = "discount_id")
    private Discount discount;

    @Column(name = "total_price")
    private Float totalPrice;

    @Column(name = "shipped")
    private boolean shipped;

    @Column(name = "status")
    private String status;

    @Column(name = "tracking_number")
    private String trackingNumber;
}
