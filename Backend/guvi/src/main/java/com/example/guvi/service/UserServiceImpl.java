/*
 * Author : Naveen Kumar
 * Date : 22-11-2023
 * Created With : IntelliJ IDEA Community Edition
 */

package com.example.guvi.service;

import com.example.guvi.model.User;
import com.example.guvi.repo.UserRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl  implements UserService {
    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User save(User user) {
        User user1 = userRepo.save(user);


        return user1;
    }

    @Override
    public User checkAuth(User user) {
        Optional<User> optionalUser = userRepo.findById(user.getEmail());
        if (optionalUser.isPresent()) {
            User user1 = optionalUser.get();
            if (user1.getPassword().equals(user.getPassword())) {
                return user1;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }


    @Override
    public User loginAuth(String email) {
        return userRepo.findById(email).orElse(null);
    }


    @Override
    public User getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    @Override
    public User editUserInfo(User updatedUser, String email) {
        Optional<User> optionalUser = userRepo.findById(email);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();

            if (updatedUser.getName() != null && !updatedUser.getName().isEmpty()) {
                existingUser.setName(updatedUser.getName());
            }
            if (updatedUser.getAge() != null && !updatedUser.getAge().isEmpty()) {
                existingUser.setAge(updatedUser.getAge());
            }
            if (updatedUser.getPhoneNumber() != null && !updatedUser.getPhoneNumber().isEmpty()) {
                existingUser.setPhoneNumber(updatedUser.getPhoneNumber());
            }
            if (updatedUser.getDob() != null && !updatedUser.getDob().isEmpty()) {
                existingUser.setDob(updatedUser.getDob());
            }
            if (updatedUser.getGender() != null && !updatedUser.getGender().isEmpty()) {
                existingUser.setGender(updatedUser.getGender());
            }

            return userRepo.save(existingUser);
        }

        return null;
    }





}

