package com.webspecialization.backend.service;

import com.webspecialization.backend.entity.Role;
import com.webspecialization.backend.entity.User;
import com.webspecialization.backend.entity.UserAddress;
import com.webspecialization.backend.entity.UserRole;
import com.webspecialization.backend.entity.composite_key.UserRoleId;
import com.webspecialization.backend.exception.NotFoundException;
import com.webspecialization.backend.model.response.GetUserResponse;
import com.webspecialization.backend.model.response.UserAddressResponse;
import com.webspecialization.backend.model.response.UserInformationResponse;
import com.webspecialization.backend.repo.RoleRepository;
import com.webspecialization.backend.repo.UserRepository;
import com.webspecialization.backend.repo.UserRoleRepository;
import jakarta.transaction.Transactional;
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
    @Autowired
    private UserRoleRepository userRoleRepository;
    @Autowired
    private RoleRepository roleRepository;


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

    public List<GetUserResponse> getAllUser(){
        List<User> userList = userRepository.findAll();
        return userList.stream().map(converter::convertUserToGetUserResponse).collect(Collectors.toList());
    }

    public GetUserResponse setActiveStatus(Long idUser) {
        User user = userRepository.findById(idUser).orElseThrow(() -> new NotFoundException("User id not found"));
        user.setActive(!user.isActive());
        User updatedUser = userRepository.save(user);
        return converter.convertUserToGetUserResponse(user);
    }

//    public void setRoleUser(Long id, String roleName) {
//        User user = userRepository.findById(id)
//                .orElseThrow(() -> new NotFoundException("User id not found"));
//
//        Role role = roleRepository.findRoleByRoleName(roleName);
//
//        // Create a new UserRole with the updated role
//        UserRole newUserRole = new UserRole();
//        UserRoleId newUserRoleId = new UserRoleId();
//        newUserRoleId.setUserId(user.getId());
//        newUserRoleId.setRoleId(role.getId());
//        newUserRole.setId(newUserRoleId);
//        newUserRole.setUser(user);
//        newUserRole.setRole(role);
//
//        // Update the user's list of user roles
//        user.getUserRoles().clear();
//        user.getUserRoles().add(newUserRole);
//
//        userRepository.save(user);
//    }

    public List<GetUserResponse> deleteUser(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User id not found"));
        userRepository.delete(user);
        return getAllUser();
    }

    public User getUserByUsername(String username) {
        User user = userRepository.findUserByUsername(username).orElseThrow(() -> new NotFoundException("Username not found"));
        return user;
    }
}
