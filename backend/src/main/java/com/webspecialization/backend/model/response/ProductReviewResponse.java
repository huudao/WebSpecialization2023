package com.webspecialization.backend.model.response;

import lombok.Data;

import java.util.Date;

@Data
public class ProductReviewResponse {
    private int productId;
    private int reviewId;
    private String username;
    private int rating;
    private String reviewTitle;
    private String review;
    private int likeNumber;
    private int dislikeNumber;
    private boolean isRecommend;
    private Date createdDate;
    private Date updatedDate;
}