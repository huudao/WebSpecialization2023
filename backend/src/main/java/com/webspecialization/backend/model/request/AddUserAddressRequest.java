package com.webspecialization.backend.model.request;

import lombok.Data;

@Data
public class AddUserAddressRequest {
    private String username;
    private String phone;
    private String city;
    private String district;
    private String ward;
    private String specificAddress;
    private int isDefault;
}
