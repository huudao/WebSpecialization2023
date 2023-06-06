package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginRequest {
    @Valid
    @NotNull(message = "Username is required")
    @NotBlank(message = "Username must not be blank")
    private String username;

    @NotNull(message = "Password is required")
    @NotBlank(message = "Password must not be blank")
    private String password;
}
