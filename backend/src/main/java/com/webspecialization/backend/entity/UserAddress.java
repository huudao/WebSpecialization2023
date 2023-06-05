package com.webspecialization.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserAddress extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String username;
    private String phone;
    private String city;
    private String district;
    private String ward;
    private String specificAddress;
    private int isDefault;
}
