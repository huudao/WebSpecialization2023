package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Cart;
import com.webspecialization.backend.entity.Discount;
import com.webspecialization.backend.model.response.CartResponse;
import com.webspecialization.backend.repo.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiscountService {
    @Autowired
    DiscountRepository discountRepository;
    @Autowired
    private CartService cartService;
    @Autowired
    private Converter converter;

    public CartResponse applyDiscount(String discountCode) {
        Discount discount = discountRepository.findByDiscountCode(discountCode).orElseThrow(() -> new RuntimeException("Discount code not found"));
        if (!discount.isActive()) throw new RuntimeException("Discount code is expired!");

        Cart cart = cartService.getCart();
        cart.setDiscount(discount);
        cart = cartService.calculatePrice(cart);
        cartService.saveCart(cart);
        return converter.convertCartToCartResponse(cart);
    }
}
