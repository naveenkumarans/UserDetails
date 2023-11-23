/*
 * Author : Naveen Kumar
 * Date : 22-11-2023
 * Created With : IntelliJ IDEA Community Edition
 */

package com.example.guvi.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class User {


    @Id
    String email;
    String name;
    String password;
    String confirmPassword;
    String age;
    String gender;
    String dob;
    String phoneNumber;

}
