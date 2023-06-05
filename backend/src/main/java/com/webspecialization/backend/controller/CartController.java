package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.request.AddToCartRequest;
import com.webspecialization.backend.model.request.ApplyDiscountRequest;
import com.webspecialization.backend.model.request.DecrementCartItemRequest;
import com.webspecialization.backend.model.request.IncrementCartItemRequest;
import com.webspecialization.backend.model.response.CartResponse;
import com.webspecialization.backend.service.CartService;
import com.webspecialization.backend.service.DiscountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private DiscountService discountService;


    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        System.out.println("whwewheehw");

        return ResponseEntity.ok("hellloooooooooo");
    }

    // get cart of logined user
    @GetMapping("/cart")
    public ResponseEntity<CartResponse> listMyCard() {
        CartResponse cart = cartService.getCartResponse();
        if(cart == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(cart);
    }

    // add cart item into user's cart
    @PostMapping("/cart")
    public ResponseEntity<CartResponse> addIntoCart(@Valid @RequestBody AddToCartRequest addToCartRequest) {
        CartResponse cart = cartService.addIntoCart(addToCartRequest);
        return ResponseEntity.ok(cart);

    }

    //     delete all cart item
    @DeleteMapping(value = "/cart")
    public ResponseEntity<?> emptyCart() {
        cartService.emptyCart();
        return ResponseEntity.ok().build();
    }

    // delete a cartItem
    @DeleteMapping("/cart/remove/{cartItemId}")
    public ResponseEntity<CartResponse> deleteFromCartByCartItemId(@PathVariable int cartItemId) {
        CartResponse cart = cartService.removeFromCart(cartItemId);
        return ResponseEntity.ok(cart);
    }

    // increase number of cartItem
    @PostMapping ("/cart/increment")
    public ResponseEntity<CartResponse> increaseCartItem(@Valid @RequestBody IncrementCartItemRequest incrementCartItemRequest) {
        CartResponse cart = cartService.incrementCartItem(incrementCartItemRequest);
        return ResponseEntity.ok(cart);
    }

    // decrease number of cartItem
    @PostMapping ("/cart/decrement")
    public ResponseEntity<CartResponse> decreaseCartItem(@RequestBody DecrementCartItemRequest decrementCartItemDTO) {
        try {
            CartResponse cart = cartService.decrementCartItem(decrementCartItemDTO);
            return ResponseEntity.ok(cart);
        }catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping(value = "/cart/discount")
    public ResponseEntity<CartResponse> applyDiscount(@Valid @RequestBody ApplyDiscountRequest applyDiscountRequest) {
        CartResponse cartResponse = discountService.applyDiscount(applyDiscountRequest.getDiscountCode());
        return ResponseEntity.ok(cartResponse);
    }
}
