package com.webspecialization.backend.model.dto;

import lombok.Data;

@Data
public class UserAddressDTO {
    private String username;
    private String phone;
    private String city;
    private String district;
    private String ward;
}
