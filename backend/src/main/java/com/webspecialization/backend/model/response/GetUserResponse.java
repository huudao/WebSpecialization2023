package com.webspecialization.backend.model.response;

import lombok.Data;

import java.util.List;

@Data
public class GetUserResponse {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String avatar;
    private String firstName;
    private String lastName;
    private String telephone;
    private boolean active;
    private String resetPasswordToken;
    private List<String> roleList;
}
