package com.webspecialization.backend.model.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ForgottenPasswordRequest {
    private String email;
}
