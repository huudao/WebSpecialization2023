package com.webspecialization.backend.controller.admin;

import com.webspecialization.backend.model.response.GetUserResponse;
import com.webspecialization.backend.repo.UserRepository;
import com.webspecialization.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class UserManagementController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<List<GetUserResponse>> getAllUser(){
        return ResponseEntity.ok(userService.getAllUser());
    }

    @PutMapping("/user/set-active/{id}")
    public ResponseEntity<GetUserResponse> modifyActiveStatus(@PathVariable Long id){
        return ResponseEntity.ok(userService.setActiveStatus(id));
    }

//    @PutMapping("/user/set-role/{idUser}/{idRole}")
//    public ResponseEntity<GetUserResponse> modifyActiveStatus(@PathVariable Long idUser, @PathVariable Long idRole) {
//        return ResponseEntity.ok(userService.setRoleForUser(idUser, idRole));
//    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<List<GetUserResponse>> deleteUser(@PathVariable Long id){
        return ResponseEntity.ok(userService.deleteUser(id));
    }
}
