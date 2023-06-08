package com.webspecialization.backend.controller.admin;

import com.webspecialization.backend.entity.OrderDetail;
import com.webspecialization.backend.model.dto.OrderDetailDTO;
import com.webspecialization.backend.model.response.OrderResponse;
import com.webspecialization.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class OrderManagementController {
    @Autowired
    OrderService orderService;

    @GetMapping("/order")
    public ResponseEntity<List<OrderResponse>> getAllOrders(){
        List<OrderResponse> orderResponses = orderService.getAllOrder();
        return ResponseEntity.ok(orderResponses);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<OrderDetailDTO>> getOrderDetailsByOrderId(@PathVariable Long orderId){
        List<OrderDetailDTO> response = orderService.getOrderDetailByOrderId(orderId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/order/user/{username}")
    public ResponseEntity<List<OrderResponse>> getOrdersByUsername(@PathVariable String username){
        List<OrderResponse> orderResponses = orderService.getOrderByUsername(username);
        return ResponseEntity.ok(orderResponses);
    }

    @PostMapping("/order/{orderId}")
    public ResponseEntity<OrderResponse> setOrderStatus(@PathVariable Long orderId, @RequestParam String status) {
        OrderResponse orderResponses = orderService.setOrderStatus(orderId, status);
        return ResponseEntity.ok(orderResponses);
    }
}
