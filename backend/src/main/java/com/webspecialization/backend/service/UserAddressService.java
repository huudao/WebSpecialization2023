package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.UserAddress;
import com.webspecialization.backend.repo.UserAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserAddressService {
    @Autowired
    private UserAddressRepository userAddressRepository;
}
