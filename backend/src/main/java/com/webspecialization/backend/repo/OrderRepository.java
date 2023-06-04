package com.webspecialization.backend.repo;

import com.webspecialization.backend.entity.Order;
import com.webspecialization.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> getOrdersByUser(User user);
}
