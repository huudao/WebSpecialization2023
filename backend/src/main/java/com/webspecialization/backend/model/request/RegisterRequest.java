package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RegisterRequest {
    @Valid
    @NotNull(message = "Username is mandatory")
    @NotBlank(message = "Username is mandatory")
    @Size(min = 4, max = 20, message = "Username must be between 4 and 20 characters")
    private String username;

    @NotNull(message = "Password is mandatory")
    @NotBlank(message = "Password is mandatory")
    @Size(min = 2, max = 20, message = "Password must be between 2 and 20 characters")
    private String password;

    @NotNull(message = "Email is mandatory")
    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    private String email;

    @NotNull(message = "First name is mandatory")
    @NotBlank(message = "First name is mandatory")
    @Size(min = 2, max = 200, message = "First name must be between 2 and 200 characters")
    private String firstName;

    @NotNull(message = "Last name is mandatory")
    @NotBlank(message = "Last name is mandatory")
    @Size(min = 2, max = 200, message = "Last name must be between 2 and 200 characters")
    private String lastName;

    @Pattern(regexp = "\\d{10}", message = "Telephone number should be 10 digits")
    private String telephone;
}
