/*
 * Author : Naveen Kumar
 * Date : 22-11-2023
 * Created With : IntelliJ IDEA Community Edition
 */

package com.example.guvi.service;

import com.example.guvi.model.User;

import java.util.Map;

public interface SecurityTokenGenerator {
    public Map<String, String> generateToken(User user);
}
