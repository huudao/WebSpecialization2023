package com.webspecialization.backend.controller;

import com.webspecialization.backend.model.request.PostOrderRequest;
import com.webspecialization.backend.model.response.OrderResponse;
import com.webspecialization.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping("/user/order")
    public ResponseEntity<List<OrderResponse>> getOrderHistory(){
        List<OrderResponse> responseList = orderService.getOrderHistory();
        return ResponseEntity.ok(responseList);
    }

    @PostMapping("/order")
    public ResponseEntity<OrderResponse> postOrder(@RequestBody PostOrderRequest postOrderRequest){
        OrderResponse response = orderService.postOrder(postOrderRequest);
        return ResponseEntity.ok(response);
    }

}
