package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.dto.cart.AddToCartDTO;
import com.webspecialization.backend.model.dto.cart.CartDTO;
import com.webspecialization.backend.model.dto.cart.DecrementCartItemDTO;
import com.webspecialization.backend.model.dto.cart.IncrementCartItemDTO;
import com.webspecialization.backend.service.CartService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        System.out.println("whwewheehw");

        return ResponseEntity.ok("hellloooooooooo");
    }

    @GetMapping("/cart")
    public ResponseEntity<CartDTO> listMyCard(HttpServletRequest request) {
        System.out.println("asdf");
        try {
            CartDTO cart = cartService.getCartDTOByJwt(request);
            if(cart == null) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(cart);
//            return new ResponseEntity<>(cart, HttpStatus.FOUND);
        }catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping ("/cart")
    public ResponseEntity<CartDTO> addIntoCart(HttpServletRequest request, @RequestBody AddToCartDTO addToCartDTO) {
            CartDTO cart = cartService.addIntoCart(request,addToCartDTO);
            return ResponseEntity.ok(cart);

    }

    @PostMapping ("/cart/increment")
    public ResponseEntity<CartDTO> increaseCartItem(HttpServletRequest request, @RequestBody IncrementCartItemDTO incrementCartItemDTO) {
            CartDTO cart = cartService.incrementCartItem(request,incrementCartItemDTO);
            return ResponseEntity.ok(cart);
    }

    @PostMapping ("/cart/decrement")
    public ResponseEntity<?> decreaseCartItem(HttpServletRequest request, @RequestBody DecrementCartItemDTO decrementCartItemDTO) {
        try {
            CartDTO cart = cartService.decrementCartItem(request,decrementCartItemDTO);
            return ResponseEntity.ok(cart);
        }catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.badRequest().build();
    }
}
