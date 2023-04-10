package com.webspecialization.backend.repository;

import com.webspecialization.backend.model.Cart;
import com.webspecialization.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Cart findByUser(User user);
}
