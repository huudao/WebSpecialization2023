package com.webspecialization.backend.model.request;

import lombok.Data;

@Data
public class SaveProductReviewRequest {
    private int productId;
    private int rating;
    private String reviewTitle;
    private String review;
    private boolean isRecommend;
}
