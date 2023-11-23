package com.example.guvi.service;

import com.example.guvi.model.User;

public interface UserService {
    User save(User user) ;
    public User checkAuth(User user);
    public User loginAuth(String email);
    User getUserByEmail(String email);
    public User editUserInfo(User borrower, String email);

}
