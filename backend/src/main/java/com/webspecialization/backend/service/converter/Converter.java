package com.webspecialization.backend.service.converter;

import com.webspecialization.backend.model.*;
import com.webspecialization.backend.model.dto.cart.CartDTO;
import com.webspecialization.backend.model.dto.cart.CartItemDTO;
import com.webspecialization.backend.model.dto.ProductReviewDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDTO;
import com.webspecialization.backend.model.dto.product.ProductVariantDetailsDTO;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class Converter {
    public ProductReviewDTO convertProductReviewToDTO(ProductReview productReview){
        ProductReviewDTO productReviewDto = new ProductReviewDTO();
        productReviewDto.setReviewId(productReview.getReviewId());
        productReviewDto.setUsername(productReview.getUser().getUsername());
        productReviewDto.setProductId(productReview.getProduct().getProductId());
        productReviewDto.setRating(productReview.getRating());
        productReviewDto.setReviewTitle(productReview.getReviewTitle());
        productReviewDto.setReview(productReview.getReview());
        productReviewDto.setLikeNumber(productReview.getLikeNumber());
        productReviewDto.setDislikeNumber(productReview.getDislikeNumber());
        productReviewDto.setRecommend(productReview.isRecommend());
        productReviewDto.setInsertedAt(productReview.getInsertedAt());
        productReviewDto.setUpdatedAt(productReview.getUpdatedAt());
        return productReviewDto;
    }
    public ProductVariantDTO convertProductToProductVariantDTODefault(Product product) {
        ProductVariantDTO productResponse = new ProductVariantDTO();
        productResponse.setProductId(product.getProductId());
        productResponse.setBrandName(product.getBrand().getName());
        productResponse.setName(product.getName());
        productResponse.setImageUrl(product.getImageUrl());
        for(ProductVariant v : product.getVariants()) {
            if(v.isVariantDefault()) productResponse.setProductVariant(v);
        }
        productResponse.setAverageRating(product.averageRating());
        return productResponse;
    }

    public ProductVariantDetailsDTO convertProductDetailsToDTO(Product product, ProductVariant variant) {
        ProductVariantDetailsDTO productResponse = new ProductVariantDetailsDTO();
        productResponse.setProductId(product.getProductId());
        productResponse.setBrandName(product.getBrand().getName());
        productResponse.setName(product.getName());
        productResponse.setGenderType(product.getGenderType());
        productResponse.setDescription(product.getDescription());
        productResponse.setImageUrl(product.getImageUrl());
        productResponse.setShippingPolicy(product.getShippingPolicy());
        productResponse.setProductVariant(variant);
        productResponse.setVariants(product.getVariants());
        return productResponse;
    }

    public CartDTO convertCartToDTO(Cart cart){
        CartDTO cartDTO = new CartDTO();
        cartDTO.setCartId(cart.getCartId());
        cartDTO.setUserId(cart.getUser().getUserId());
        cartDTO.setCartItems(cart.getCartItems()
                .stream()
                .map(this::cartItemToDTO).collect(Collectors.toList()));
        return cartDTO;
    }
    private CartItemDTO cartItemToDTO(CartItem cartItem) {
        CartItemDTO c = new CartItemDTO();
        c.setCartItemId(cartItem.getCartItemId());

        ProductVariantDTO variant = new ProductVariantDTO();
        variant.setProductId(cartItem.getProductVariant().getProduct().getProductId());
        variant.setProductVariant(cartItem.getProductVariant());
        variant.setBrandName(cartItem.getProductVariant().getProduct().getBrand().getName());
        variant.setName(cartItem.getProductVariant().getProduct().getName());
        variant.setImageUrl(cartItem.getProductVariant().getProduct().getImageUrl());
        variant.setAverageRating(cartItem.getProductVariant().getProduct().averageRating());

        c.setProduct(variant);
        c.setAmount(cartItem.getAmount());

        return c;
    }
}
