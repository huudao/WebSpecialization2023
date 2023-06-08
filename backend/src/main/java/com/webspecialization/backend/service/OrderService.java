package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.*;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.dto.OrderDetailDTO;
import com.webspecialization.backend.model.request.PostOrderRequest;
import com.webspecialization.backend.model.response.OrderResponse;
import com.webspecialization.backend.repo.OrderDetailRepository;
import com.webspecialization.backend.repo.OrderRepository;
import com.webspecialization.backend.repo.UserAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Value("${order.status.preparing}")
    private String preparingStatus;
    @Value("${order.status.processing}")
    private String processingStatus;
    @Value("${order.status.delivered}")
    private String deliveredStatus;
    @Value("${order.status.cancelled}")
    private String cancelledStatus;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private UserAddressRepository userAddressRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CartService cartService;
    @Autowired
    private Converter converter;

    public List<OrderResponse> getOrderHistory() {
        User user = userService.getUser();
        List<Order> orderList = orderRepository.getOrdersByUser(user);
        List<OrderResponse> response = orderList.stream().map(converter::convertOrderToOrderResponse)
                .collect(Collectors.toList());
        return response;
    }

    public List<OrderDetailDTO> getOrderDetailByOrderId(Long orderId){
        List<OrderDetail> orderDetailList = orderDetailRepository.getOrderDetailsByOrder_Id(orderId);

        return orderDetailList.stream().map(converter::convertOrderDetailToOrderDetailDTO).collect(Collectors.toList());
    }

    public List<OrderResponse> getAllOrder(){
        List<Order> orderList = orderRepository.findAll();
        List<OrderResponse> orderResponses = orderList.stream().map(converter::convertOrderToOrderResponse)
                .collect(Collectors.toList());
        return orderResponses;
    }

    public OrderResponse postOrder(PostOrderRequest postOrderRequest) {
        User user = userService.getUser();
        Cart cart = user.getCart();
        UserAddress userAddress = userAddressRepository.findById(postOrderRequest.getAddressId()).orElse(null);
        Date now = new Date();

        Order order = new Order();
        order.setUser(user);
        order.setUserAddress(userAddress);
        order.setDiscount(cart.getDiscount());
        order.setTotalPrice(cart.getTotalPrice());
        order.setShipped(false);
        order.setStatus(preparingStatus);
        order.setCreatedDate(now);
        order.setUpdatedDate(now);
        List<OrderDetail> orderDetailList = new ArrayList<>();

        cart.getCartItems().forEach(cartItem -> {
            cartItem.getProductVariant().setSellCount(cartItem.getProductVariant().getSellCount() + cartItem.getAmount());
            cartItem.getProductVariant().setStock(cartItem.getProductVariant().getStock() - cartItem.getAmount());
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setOrder(order);
            orderDetail.setAmount(cartItem.getAmount());
            orderDetail.setProductVariant(cartItem.getProductVariant());
            orderDetail.setCreatedDate(now);
            orderDetail.setUpdatedDate(now);
            orderDetailList.add(orderDetail);
        });
        order.setOrderDetailList(orderDetailList);
        cartService.emptyCart();
        Order responseOrder = orderRepository.save(order);

        return converter.convertOrderToOrderResponse(responseOrder);
    }

    public List<OrderResponse> getOrderByUsername(String username) {
        User user = userService.getUserByUsername(username);
        List<Order> orderList = orderRepository.getOrdersByUser(user);
        List<OrderResponse> orderResponses = orderList.stream().map(converter::convertOrderToOrderResponse)
                .collect(Collectors.toList());
        return orderResponses;
    }

    public OrderResponse setOrderStatus(Long orderId, String status) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new NotFoundException("order id not found"));
        order.setStatus(status);
        orderRepository.save(order);
        return converter.convertOrderToOrderResponse(order);
    }
}
