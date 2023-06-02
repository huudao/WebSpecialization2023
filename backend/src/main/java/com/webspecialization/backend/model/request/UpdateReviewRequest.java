package com.webspecialization.backend.model.request;

import lombok.Data;

@Data
public class UpdateReviewRequest {
    private int productId;
    private int reviewId;
    private int rating;
    private String reviewTitle;
    private String review;
    private boolean isRecommend;
}
