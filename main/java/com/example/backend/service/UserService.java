package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    
    public boolean authenticateUser(String identifier, String password) {
        User user = userRepository.findByEmailOrMobile(identifier);
        if (user != null) {
            return user.getPassword().equals(password);
        }
        return false;
    }
    
}
