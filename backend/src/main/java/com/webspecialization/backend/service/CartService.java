package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Cart;
import com.webspecialization.backend.entity.CartItem;
import com.webspecialization.backend.entity.ProductVariant;
import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.exception.InvalidArgumentException;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.request.AddToCartRequest;
import com.webspecialization.backend.model.request.DecrementCartItemRequest;
import com.webspecialization.backend.model.request.IncrementCartItemRequest;
import com.webspecialization.backend.model.response.CartResponse;
import com.webspecialization.backend.repo.CartItemRepository;
import com.webspecialization.backend.repo.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.Objects;

@Service
@AllArgsConstructor
public class CartService {
    private UserService userService;
    private Converter converter;
    private ProductVariantService productVariantService;
    private CartRepository cartRepository;
    private CartItemRepository cartItemRepository;

    public Cart getCart() {
        Cart cart = userService.getUser().getCart();
        return cart;
    }

    public void saveCart(Cart cart) {
        if (Objects.isNull(cart)) {
            throw new InvalidArgumentException("Cart is null");
        }
        cartRepository.save(cart);
    }

    public CartResponse getCartResponse() {
        User user = userService.getUser();
        Cart cart = user.getCart();
        if(cart == null) return null;
        return converter.convertCartToCartResponse(cart);
    }

    public CartResponse addIntoCart(AddToCartRequest addToCartRequest) {
        User user = userService.getUser();
        Cart cart = user.getCart();
        ProductVariant p = productVariantService.findById(addToCartRequest.getProductVariantId());
        if(cart == null) {
            cart = new Cart();
            cart.setUser(user);
            Date now = new Date();
            cart.setCreatedDate(now);
            cart.setUpdatedDate(now);
        }

        // if a cart item that have already existed in the database so that just increase the amount.
        // If the number of that product in the cart item exceeds the product stock, an exception is returned
        for(CartItem item : cart.getCartItems()) {
            if(item.getProductVariant() == p){
                int amount = item.getAmount() + addToCartRequest.getAmount();
                if(amount > p.getStock()) throw new InvalidArgumentException("Product does not have desired stock.");
                item.setAmount(amount);
                cart = calculatePrice(cart);
                cartRepository.save(cart);
                return converter.convertCartToCartResponse(cart);
            }
        }

        // if a cart item that haven't had yet. Create a new cart item and save it
        // If the number of that product in the cart item exceeds the product stock, an exception is returned
        if(addToCartRequest.getAmount() > p.getStock()) throw new RuntimeException("Product does not have desired stock.");
        CartItem cartItem = new CartItem();
        cartItem.setCart(cart);
        cartItem.setProductVariant(p);
        cartItem.setAmount(addToCartRequest.getAmount());
        Date now = new Date();
        cartItem.setCreatedDate(now);
        cartItem.setUpdatedDate(now);
        for(CartItem item : cart.getCartItems()) {
            if(item.getProductVariant().getId() == p.getId()){
                item.getAmount();
            }
        }
        cart.getCartItems().add(cartItem);
        cart = calculatePrice(cart);
        cartRepository.save(cart);
        return converter.convertCartToCartResponse(cart);
    }

    public void emptyCart() {
        Cart cart = userService.getUser().getCart();
        cartRepository.delete(cart);
    }

    public CartResponse removeFromCart(long cartItemId) {
        Cart cart = userService.getUser().getCart();

        CartItem cartItem = cartItemRepository.findById(cartItemId).orElse(null);

        if (Objects.isNull(cart) || Objects.isNull(cart.getCartItems()) || cart.getCartItems().isEmpty() || cartItem == null) {
            throw new RuntimeException("Cart or CartItem not found");
        }

        cart.getCartItems().remove(cartItem);
        cart = calculatePrice(cart);
        cartRepository.save(cart);

        if(cart.getCartItems().size() == 0) {
            cartRepository.delete(cart);
            return null;
        }
        return converter.convertCartToCartResponse(cart);
    }

    public CartResponse incrementCartItem(IncrementCartItemRequest incrementCartItemRequest) {
        Cart cart = userService.getUser().getCart();

        if (Objects.isNull(cart) || Objects.isNull(cart.getCartItems()) || cart.getCartItems().isEmpty()) {
            throw new NotFoundException("Cart or CartItem not found");
        }

        // get cart item in that cart have the same cartItemId
        CartItem cartItem = cart.getCartItems()
                .stream()
                .filter(ci -> ci.getId() == incrementCartItemRequest.getCartItemId())
                .findFirst()
                .orElseThrow(() -> new NotFoundException("CartItem not found"));

        int amount = cartItem.getAmount() + incrementCartItemRequest.getAmount();
        if(amount > cartItem.getProductVariant().getStock()) throw new NotFoundException("Product does not have desired stock.");
        cartItem.setAmount(cartItem.getAmount() + incrementCartItemRequest.getAmount());
        cart = calculatePrice(cart);
        cart = cartRepository.save(cart);
        return converter.convertCartToCartResponse(cart);
    }

    public CartResponse decrementCartItem(DecrementCartItemRequest decrementCartItemRequest) {
        Cart cart = userService.getUser().getCart();

        if (Objects.isNull(cart) || Objects.isNull(cart.getCartItems()) || cart.getCartItems().isEmpty()) {
            throw new RuntimeException("Cart or CartItem not found");
        }
        // get cart item in that cart have the same cartItemId
        CartItem cartItem = cart.getCartItems()
                .stream()
                .filter(ci -> ci.getId() == decrementCartItemRequest.getCartItemId())
                .findFirst()
                .orElseThrow(() -> new RuntimeException("CartItem not found"));

        int amount = cartItem.getAmount() - decrementCartItemRequest.getAmount();
        if(amount <= 0) throw new RuntimeException("amount have to greater than 0");
        cartItem.setAmount(amount);
        cart = calculatePrice(cart);
        cart = cartRepository.save(cart);
        return converter.convertCartToCartResponse(cart);
    }

    public Cart calculatePrice(Cart cart) {
        cart.setTotalCartPrice(0F);
        cart.setTotalPrice(0F);

        cart.getCartItems().forEach(cartItem -> {
            cart.setTotalCartPrice(cart.getTotalCartPrice() + (cartItem.getProductVariant().getPrice() * (100 - cartItem.getProductVariant().getDiscount())/100) * cartItem.getAmount());
            cart.setTotalPrice(
                    cart.getTotalPrice() + (cartItem.getProductVariant().getPrice() * (100 - cartItem.getProductVariant().getDiscount())/100)* cartItem.getAmount());
        });

        if (Objects.nonNull(cart.getDiscount())) {
            cart.setTotalPrice(cart.getTotalPrice() - ((cart.getTotalPrice() * cart.getDiscount().getDiscountPercentage()) / 100));
        }

        cart.setTotalPrice(roundTwoDecimals(cart.getTotalPrice()));
        return cart;
    }

    private float roundTwoDecimals(float d) {
        DecimalFormat twoDForm = new DecimalFormat("#.##");
        return Float.parseFloat(twoDForm.format(d));
    }


}
