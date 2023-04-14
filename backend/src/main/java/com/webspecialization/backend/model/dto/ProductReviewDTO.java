package com.webspecialization.backend.model.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ProductReviewDTO {
    private int reviewId;
    private String username;
    private int productId;
    private int rating;
    private String reviewTitle;
    private String review;
    private int likeNumber;
    private int dislikeNumber;
    private boolean isRecommend;
    private Date insertedAt;
    private Date updatedAt;
}