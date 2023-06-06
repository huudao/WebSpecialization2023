package com.webspecialization.backend.model.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SaveProductReviewRequest {
    private int productId;
    @Valid
    @NotNull(message = "rating is required")
    @Min(value = 1, message = "rating must be at least 1")
    @Max(value = 5, message = "rating must be at most 5")
    private Integer rating;

    @Size(max = 100, message = "reviewTitle cannot exceed 100 characters")
    private String reviewTitle;

    @Size(max = 500, message = "review cannot exceed 500 characters")
    private String review;

    private boolean isRecommend;
}
