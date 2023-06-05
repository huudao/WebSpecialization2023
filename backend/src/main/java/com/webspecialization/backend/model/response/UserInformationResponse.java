package com.webspecialization.backend.model.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserInformationResponse {
    private String username;
    private String email;
    private String avatar;
    private String firstName;
    private String lastName;
    private String telephone;
}
