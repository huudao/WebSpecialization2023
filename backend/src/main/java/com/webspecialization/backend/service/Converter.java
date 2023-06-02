package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.*;
import com.webspecialization.backend.model.dto.CartItemDTO;
import com.webspecialization.backend.model.dto.DiscountDTO;
import com.webspecialization.backend.model.response.*;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Converter {
    ModelMapper mapper = new ModelMapper();
    public ProductVariantResponse convertProductVariantToProductVariantResponse(ProductVariant productVariant) {
        ProductVariantResponse variantResponse = mapper.map(productVariant, ProductVariantResponse.class);
        variantResponse.setName(productVariant.getProduct().getName());
        variantResponse.setBrandId(productVariant.getProduct().getBrand().getId());
        variantResponse.setBrandName(productVariant.getProduct().getBrand().getName());
        variantResponse.setPriceAfterDiscount(productVariant.getPrice() * (100 - productVariant.getDiscount()) / 100);
        variantResponse.setAverageRating(productVariant.getProduct().averageRating());
        List<String> imageUrls = new ArrayList<>();
        for(Image urls : productVariant.getImages()){
            imageUrls.add(urls.getUrl());
        }
        variantResponse.setImageUrls(imageUrls);
        return variantResponse;
    }

    public ProductDetailsResponse convertProductVariantToProductDetailsResponse(ProductVariant productVariant) {
        ProductDetailsResponse detailsResponse = mapper.map(productVariant, ProductDetailsResponse.class);
        detailsResponse.setName(productVariant.getProduct().getName());
        detailsResponse.setBrandId(productVariant.getProduct().getBrand().getId());
        detailsResponse.setBrandName(productVariant.getProduct().getBrand().getName());
        detailsResponse.setAverageRating(productVariant.getProduct().averageRating());
        detailsResponse.setDescription(productVariant.getProduct().getDescription());
        detailsResponse.setShippingPolicy(productVariant.getProduct().getShippingPolicy());
        List<String> imageUrls = new ArrayList<>();
        for(Image urls : productVariant.getImages()){
            imageUrls.add(urls.getUrl());
        }
        detailsResponse.setImageUrls(imageUrls);

        List<ProductVariantDetailsResponse> variantDetailsResponseList = new ArrayList<>();
        for(ProductVariant variant : productVariant.getProduct().getVariants()) {
            ProductVariantDetailsResponse variantDetailsResponse = mapper.map(variant, ProductVariantDetailsResponse.class);
            variantDetailsResponse.setPriceAfterDiscount(variant.getPrice() * (100 - variant.getDiscount()) / 100);
            variantDetailsResponseList.add(variantDetailsResponse);
        }
        detailsResponse.setVariants(variantDetailsResponseList);

        return detailsResponse;
    }

    public ProductReviewResponse convertProductReviewToProductReviewResponse(ProductReview productReview) {
        ProductReviewResponse reviewResponse = mapper.map(productReview, ProductReviewResponse.class);
        reviewResponse.setUsername(productReview.getUser().getUsername());
        return reviewResponse;
    }

    public CartResponse convertCartToCartResponse(Cart cart) {
        CartResponse cartResponse = mapper.map(cart, CartResponse.class);
        if(cart.getDiscount() != null) {
        DiscountDTO discountDTO = mapper.map(cart.getDiscount(), DiscountDTO.class);
        cartResponse.setDiscount(discountDTO);}
        cartResponse.setCartItems(cart.getCartItems().stream().map(this::convertCartItemToCartItemDTO).collect(Collectors.toList()));
        return cartResponse;
    }

    public CartItemDTO convertCartItemToCartItemDTO(CartItem cartItem) {
        CartItemDTO c = new CartItemDTO();
        c.setCartItemId(cartItem.getId());
        List<Image> imageList = cartItem.getProductVariant().getImages();
        if(imageList != null && !imageList.isEmpty()){
        c.setImgUrl(imageList.get(0).getUrl());}
        c.setBrandName(cartItem.getProductVariant().getProduct().getBrand().getName());
        c.setName(cartItem.getProductVariant().getProduct().getName());
        c.setSize(cartItem.getProductVariant().getSize());
        c.setRegularPrice(cartItem.getProductVariant().getPrice());
        float priceAfterDiscount = cartItem.getProductVariant().getPrice() * (100 - cartItem.getProductVariant().getDiscount()) / 100;
        c.setPriceAfterDiscount(priceAfterDiscount);
        c.setAmount(cartItem.getAmount());
        c.setTotalPrice(cartItem.getAmount() * priceAfterDiscount);
        c.setStock(cartItem.getProductVariant().getStock());
        return c;
    }
}
