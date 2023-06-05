package com.webspecialization.backend.controller;

import com.webspecialization.backend.entity.UserAddress;
import com.webspecialization.backend.model.request.AddUserAddressRequest;
import com.webspecialization.backend.model.request.SetAddressDefaultRequest;
import com.webspecialization.backend.model.request.UpdateUserInformationRequest;
import com.webspecialization.backend.model.response.UserAddressResponse;
import com.webspecialization.backend.model.response.UserInformationResponse;
import com.webspecialization.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/information")
    public ResponseEntity<UserInformationResponse> getUserInformation() {
        UserInformationResponse userInformationResponse = userService.getUserInformation();
        return ResponseEntity.ok(userInformationResponse);
    }
    @PutMapping("/update-user-information")
    public ResponseEntity<UserInformationResponse> updateUserInformation(@RequestBody UpdateUserInformationRequest request) {
        UserInformationResponse userInformationResponse = userService.updateUserInformation(request.getEmail(), request.getFirstName(), request.getLastName(), request.getTelephone());
        return ResponseEntity.ok(userInformationResponse);
    }
    @GetMapping("/address")
    public ResponseEntity<List<UserAddressResponse>> getUserAddresses() {
        List<UserAddressResponse> userAddressResponseList = userService.getUserAddresses();
        return ResponseEntity.ok(userAddressResponseList);
    }
    @PostMapping ("/address")
    public ResponseEntity<List<UserAddressResponse>> addUserAddress(@RequestBody AddUserAddressRequest addUserAddressRequest){
        List<UserAddressResponse> userAddressResponseList = userService.addUserAddress(addUserAddressRequest.getUsername(),addUserAddressRequest.getPhone(), addUserAddressRequest.getCity(), addUserAddressRequest.getDistrict(), addUserAddressRequest.getWard(), addUserAddressRequest.getSpecificAddress(), addUserAddressRequest.getIsDefault());
        return ResponseEntity.ok(userAddressResponseList);
    }
    @PostMapping("/set-address-default")
    public ResponseEntity<List<UserAddressResponse>> setAddressDefaultById(@RequestBody SetAddressDefaultRequest request) {
        List<UserAddressResponse> userAddressResponseList = userService.setAddressDefaultById(request.getUserAddressId());
        return ResponseEntity.ok(userAddressResponseList);
    }
}
