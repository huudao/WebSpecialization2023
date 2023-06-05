package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.entity.UserAddress;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.response.UserAddressResponse;
import com.webspecialization.backend.model.response.UserInformationResponse;
import com.webspecialization.backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private Converter converter;

    public User getUser() {
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        if(Objects.isNull(userName)){
            throw new RuntimeException("Invalid access");
        }

        Optional<User> user = userRepository.findUserByUsername(userName);
        if (user.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        return user.get();
    }

    public UserInformationResponse getUserInformation() {
        User user = getUser();
        UserInformationResponse userInformationResponse = converter.convertUserToUserInformationResponse(user);
        return userInformationResponse;
    }

    public UserInformationResponse updateUserInformation(String email, String firstName, String lastName, String telephone) {
        User user = getUser();
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setTelephone(telephone);
        userRepository.save(user);
        return converter.convertUserToUserInformationResponse(user);
    }

    public List<UserAddressResponse> getUserAddresses() {
        User user = getUser();
        List<UserAddressResponse> userAddressResponseList = user.getAddressList().stream()
                .map(converter::convertUserAddressToUserAddressResponse).collect(Collectors.toList());
        return userAddressResponseList;
    }

    public List<UserAddressResponse> addUserAddress(String username, String phone, String city, String district, String ward, String specificAddress, int isDefault) {
        User user = getUser();
        Date now = new Date();
        UserAddress newUserAddress = new UserAddress();
        newUserAddress.setUser(user);
        newUserAddress.setUsername(username);
        newUserAddress.setPhone(phone);
        newUserAddress.setCity(city);
        newUserAddress.setDistrict(district);
        newUserAddress.setWard(ward);
        newUserAddress.setSpecificAddress(specificAddress);
        newUserAddress.setIsDefault(isDefault);
        newUserAddress.setCreatedDate(now);
        newUserAddress.setUpdatedDate(now);
        if(isDefault == 1) {
            for(UserAddress userAddress : user.getAddressList()) {
                userAddress.setIsDefault(0);
            }
            newUserAddress.setIsDefault(isDefault);
        }
        user.getAddressList().add(newUserAddress);
        userRepository.save(user);
        return user.getAddressList().stream()
                .map(converter::convertUserAddressToUserAddressResponse).collect(Collectors.toList());
    }

    public List<UserAddressResponse> setAddressDefaultById(Long userAddressId) {
        User user = getUser();
        boolean found = false;
        for(UserAddress userAddress : user.getAddressList()) {
            userAddress.setIsDefault(0);
            if(userAddress.getId() == userAddressId) {
                found = true;
                userAddress.setIsDefault(1);
            };
        }
        if(!found) {
            throw new NotFoundException("userAddressId not found");
        }

        userRepository.save(user);
        return user.getAddressList().stream()
                .map(converter::convertUserAddressToUserAddressResponse).collect(Collectors.toList());
    }
}
