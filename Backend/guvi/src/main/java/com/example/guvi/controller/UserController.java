/*
 * Author : Naveen Kumar
 * Date : 22-11-2023
 * Created With : IntelliJ IDEA Community Edition
 */

package com.example.guvi.controller;

import com.example.guvi.model.User;
import com.example.guvi.service.SecurityTokenGenerator;
import com.example.guvi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    SecurityTokenGenerator securityTokenGenerator;
    UserService userService;
    @Autowired
    public UserController(SecurityTokenGenerator securityTokenGenerator, UserService userService) {
        this.securityTokenGenerator = securityTokenGenerator;
        this.userService = userService;
    }


    @PostMapping("/registers")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

            User user1 = userService.save(user);
            return new ResponseEntity<>(user1, HttpStatus.CREATED);

    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody User form) {
        User authenticatedUser = userService.loginAuth(form.getEmail());
        if (authenticatedUser != null && authenticatedUser.getPassword().equals(form.getPassword())) {
            String token = securityTokenGenerator.generateToken(authenticatedUser).toString();
            return new ResponseEntity<>(token, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Authentication failed", HttpStatus.UNAUTHORIZED);
        }
    }



    @PutMapping("/user/edit/{email}")
    public ResponseEntity<?> editUserInfo(@PathVariable String email, @RequestBody User updatedUser) {
        User update = userService.editUserInfo(updatedUser, email);
        if (update != null) {
            return new ResponseEntity<User>(update, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Failed to Update", HttpStatus.FAILED_DEPENDENCY);
        }
    }



    @GetMapping("/user/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        User user = userService.getUserByEmail(email);
        if (user != null) {
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("User not found", HttpStatus.NOT_FOUND);
        }
    }


}
