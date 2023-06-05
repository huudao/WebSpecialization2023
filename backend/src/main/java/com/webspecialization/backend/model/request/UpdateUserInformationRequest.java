package com.webspecialization.backend.model.request;

import lombok.Data;

@Data
public class UpdateUserInformationRequest {
    private String email;
    private String firstName;
    private String lastName;
    private String telephone;
}
