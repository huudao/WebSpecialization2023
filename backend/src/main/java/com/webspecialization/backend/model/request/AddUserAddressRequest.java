package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class AddUserAddressRequest {
    @Valid
    @NotNull(message = "Username is mandatory")
    @NotBlank(message = "Username is mandatory")
    private String username;

    @NotNull(message = "Phone is mandatory")
    @NotBlank(message = "Phone is mandatory")
    @Pattern(regexp = "\\d{10}", message = "Phone number should be 10 digits")
    private String phone;

    @NotNull(message = "City is mandatory")
    @NotBlank(message = "City is mandatory")
    private String city;

    @NotNull(message = "District is mandatory")
    @NotBlank(message = "District is mandatory")
    private String district;

    @NotNull(message = "Ward is mandatory")
    @NotBlank(message = "Ward is mandatory")
    private String ward;

    @NotNull(message = "Specific address is mandatory")
    @NotBlank(message = "Specific address is mandatory")
    private String specificAddress;

    @Min(value = 0, message = "isDefault should be 0 or 1")
    @Max(value = 1, message = "isDefault should be 0 or 1")
    private int isDefault;
}
