package com.webspecialization.backend.service;

import com.webspecialization.backend.model.*;
import com.webspecialization.backend.model.dto.cart.AddToCartDTO;
import com.webspecialization.backend.model.dto.cart.CartDTO;
import com.webspecialization.backend.model.dto.cart.DecrementCartItemDTO;
import com.webspecialization.backend.model.dto.cart.IncrementCartItemDTO;
import com.webspecialization.backend.repository.*;
import com.webspecialization.backend.security.JWTUtil;
import com.webspecialization.backend.service.converter.Converter;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    @Autowired
    private JWTUtil jwtService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductVariantRepository variantRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private Converter converter;

    public CartDTO getCartDTOByJwt(HttpServletRequest request) {
        String token = jwtService.getToken(request);
        String username = jwtService.getUsername(token);
        User user = userRepository.getUserByUsername(username);

        return converter.convertCartToDTO(cartRepository.findByUser(user));
    }
    public CartDTO addIntoCart(HttpServletRequest request, AddToCartDTO addToCartDTO) {
        String token = jwtService.getToken(request);
        String username = jwtService.getUsername(token);
        User user = userRepository.getUserByUsername(username);
        Cart cart = cartRepository.findByUser(user);
        ProductVariant p = variantRepository.findById(addToCartDTO.getVariantId()).orElse(null);
        if(cart == null) {
            cart = new Cart();
            cart.setUser(user);
        }

        // if a cart item that have already existed in the database so that just increase the amount.
        // If the number of that product in the cart item exceeds the product stock, an exception is returned
        for(CartItem item : cart.getCartItems()) {
            if(item.getProductVariant().getVariantId() == p.getVariantId()){
                int amount = item.getAmount() + addToCartDTO.getAmount();
                if(amount > p.getStock()) throw new RuntimeException("Product does not have desired stock.");
                item.setAmount(amount);
                cart.getCartItems().add(item);
                cartRepository.save(cart);
                return converter.convertCartToDTO(cart);
            }
        }

        // if a cart item that haven't had yet. Create a new cart item and save it
        // If the number of that product in the cart item exceeds the product stock, an exception is returned
        if(addToCartDTO.getAmount() > p.getStock()) throw new RuntimeException("Product does not have desired stock.");
        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setProductVariant(p);
        cartItem.setAmount(addToCartDTO.getAmount());
        for(CartItem item : cart.getCartItems()) {
            if(item.getProductVariant().getVariantId() == p.getVariantId()){
                item.getAmount();
            }
        }
        cart.getCartItems().add(cartItem);
        cartRepository.save(cart);
        return converter.convertCartToDTO(cart);
    }

    public CartDTO incrementCartItem(HttpServletRequest request, IncrementCartItemDTO incrementCartItemDTO) {
        String token = jwtService.getToken(request);
        String username = jwtService.getUsername(token);
        User user = userRepository.getUserByUsername(username);
        Cart cart = cartRepository.findByUser(user);
        // get cart item in that cart have the same cartItemId
        CartItem cartItem = cart.getCartItems()
                .stream()
                .filter(ci -> ci.getProductVariant().getVariantId() == incrementCartItemDTO.getVariantId())
                .findFirst()
                .orElseThrow(() -> new RuntimeException("CartItem not found"));

        int amount = cartItem.getAmount() + incrementCartItemDTO.getAmount();
        if(amount > cartItem.getProductVariant().getStock()) throw new RuntimeException("Product does not have desired stock.");
        cartItem.setAmount(cartItem.getAmount() + incrementCartItemDTO.getAmount());
        cart = cartRepository.save(cart);
        return converter.convertCartToDTO(cart);
    }

    public CartDTO decrementCartItem(HttpServletRequest request, DecrementCartItemDTO decrementCartItemDTO) {
        String token = jwtService.getToken(request);
        String username = jwtService.getUsername(token);
        User user = userRepository.getUserByUsername(username);
        Cart cart = cartRepository.findByUser(user);
        // get cart item in that cart have the same cartItemId
        CartItem cartItem = cart.getCartItems()
                .stream()
                .filter(ci -> ci.getProductVariant().getVariantId() == decrementCartItemDTO.getVariantId())
                .findFirst()
                .orElseThrow(() -> new RuntimeException("CartItem not found"));

        int amount = cartItem.getAmount() - decrementCartItemDTO.getAmount();
        if(amount <= 0) throw new RuntimeException("amount have to greater than 0");
        cartItem.setAmount(amount);
        cart = cartRepository.save(cart);
        return converter.convertCartToDTO(cart);
    }
}
