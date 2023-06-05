package com.webspecialization.backend.model.response;

import lombok.Data;

@Data
public class UserAddressResponse {
    private Long id;
    private String username;
    private String phone;
    private String city;
    private String district;
    private String ward;
    private String specificAddress;
    private int isDefault;
}
