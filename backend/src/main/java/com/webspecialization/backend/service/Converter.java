package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.*;
import com.webspecialization.backend.model.dto.*;
import com.webspecialization.backend.model.response.*;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
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
        variantResponse.setSellCount(productVariant.getSellCount());
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
        List<String> imageProductList = new ArrayList<>();


        List<ProductVariantDetailsResponse> variantDetailsResponseList = new ArrayList<>();
        for(ProductVariant variant : productVariant.getProduct().getVariants()) {
            ProductVariantDetailsResponse variantDetailsResponse = mapper.map(variant, ProductVariantDetailsResponse.class);
            variantDetailsResponse.setPriceAfterDiscount(variant.getPrice() * (100 - variant.getDiscount()) / 100);
            List<String> imageVariantList = new ArrayList<>();
            for(Image urls : variant.getImages()){
                imageVariantList.add(urls.getUrl());
                imageProductList.add(urls.getUrl());
            }
            variantDetailsResponse.setImageList(imageVariantList);
            variantDetailsResponseList.add(variantDetailsResponse);
        }
        detailsResponse.setVariants(variantDetailsResponseList);
        detailsResponse.setImageUrls(imageProductList);

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

    public OrderResponse convertOrderToOrderResponse(Order order) {
        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setId(order.getId());
        if(order.getDiscount() != null) {
            orderResponse.setDiscountPercentage(order.getDiscount().getDiscountPercentage());
        }
        orderResponse.setTotalPrice(order.getTotalPrice());
        orderResponse.setStatus(order.getStatus());
        orderResponse.setShipped(order.isShipped());
        orderResponse.setTrackingNumber(order.getTrackingNumber());
        orderResponse.setDate(order.getCreatedDate());
        UserAddressDTO userAddressDTO = new UserAddressDTO();
        userAddressDTO.setUsername(order.getUserAddress().getUsername());
        userAddressDTO.setPhone(order.getUserAddress().getPhone());
        userAddressDTO.setCity(order.getUserAddress().getCity());
        userAddressDTO.setDistrict(order.getUserAddress().getDistrict());
        userAddressDTO.setWard(order.getUserAddress().getWard());
        orderResponse.setUserAddress(userAddressDTO);
        List<OrderDetailDTO> orderDetailDTOList = order.getOrderDetailList().stream().map(this::convertOrderDetailToOrderDetailDTO).collect(Collectors.toList());
        orderResponse.setOrderDetailList(orderDetailDTOList);

        return orderResponse;
    }

    public OrderDetailDTO convertOrderDetailToOrderDetailDTO(OrderDetail orderDetail){
        OrderDetailDTO orderDetailDTO = new OrderDetailDTO();
        orderDetailDTO.setId(orderDetail.getId());
        List<Image> imageList = orderDetail.getProductVariant().getImages();
        if(imageList != null && !imageList.isEmpty()){
            orderDetailDTO.setImageUrl(imageList.get(0).getUrl());}
        orderDetailDTO.setSize(orderDetail.getProductVariant().getSize());
        orderDetailDTO.setPrice(orderDetail.getProductVariant().getPrice());
        orderDetailDTO.setPriceAfterDiscount(orderDetail.getProductVariant().getPrice() * (100 - orderDetail.getProductVariant().getDiscount()) / 100);
        orderDetailDTO.setAmount(orderDetail.getAmount());
        return orderDetailDTO;
    }

    public UserInformationResponse convertUserToUserInformationResponse(User user) {
        return mapper.map(user, UserInformationResponse.class);
    }

    public UserAddressResponse convertUserAddressToUserAddressResponse(UserAddress userAddress) {
        return mapper.map(userAddress, UserAddressResponse.class);
    }

    public ProductVariant convertProductVariantDTOToProductVariant(ProductVariantDTO productVariantDTO) {
        ProductVariant productVariant = mapper.map(productVariantDTO, ProductVariant.class);
        List<Image> imageList = new ArrayList<>();
        for(String imageURL : productVariantDTO.getImageList()) {
            Image newImage = new Image(imageURL);
            newImage.setProductVariant(productVariant);
            newImage.setCreatedDate(new Date());
            imageList.add(newImage);
        }
        productVariant.setImages(imageList);
        return productVariant;
    }

    public ProductResponse convertProductToProductResponse(Product product) {
        ProductResponse productResponse = mapper.map(product, ProductResponse.class);
        productResponse.setBrandName(product.getBrand().getName());
        productResponse.setAverageRating(product.averageRating());

        List<ProductVariantDetailsResponse> variantDetailsResponseList = new ArrayList<>();
        for(ProductVariant variant : product.getVariants()) {
            ProductVariantDetailsResponse variantDetailsResponse = mapper.map(variant, ProductVariantDetailsResponse.class);
            variantDetailsResponse.setPriceAfterDiscount(variant.getPrice() * (100 - variant.getDiscount()) / 100);
            List<String> imageVariantList = new ArrayList<>();
            for(Image urls : variant.getImages()){
                imageVariantList.add(urls.getUrl());
            }
            variantDetailsResponse.setImageList(imageVariantList);
            variantDetailsResponseList.add(variantDetailsResponse);
        }
        productResponse.setVariants(variantDetailsResponseList);

        return productResponse;
    }
}
