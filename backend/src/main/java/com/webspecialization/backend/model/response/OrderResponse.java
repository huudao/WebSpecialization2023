package com.webspecialization.backend.model.response;

import com.webspecialization.backend.entity.OrderDetail;
import com.webspecialization.backend.model.dto.OrderDetailDTO;
import com.webspecialization.backend.model.dto.UserAddressDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
public class OrderResponse {
    long id;
    UserAddressDTO userAddress;
    int discountPercentage;
    float totalPrice;
    String status;
    boolean shipped;
    String trackingNumber;
    List<OrderDetailDTO> orderDetailList;
    Date date;
}
