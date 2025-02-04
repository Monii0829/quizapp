package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")  // To allow CORS for React frontend
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
    
    
    @PostMapping("/login")
    public String login(@RequestParam String identifier, @RequestParam String password) {
        boolean isAuthenticated = userService.authenticateUser(identifier, password);
        if (isAuthenticated) {
            return "Login successful!";
        } else {
            return "Invalid mobile/email or password!";
        }
    }
    
    
}
