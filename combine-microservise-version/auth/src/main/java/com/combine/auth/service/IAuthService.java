package com.combine.auth.service;


import com.combine.auth.dto.UserDto;

public interface IAuthService {
    
    /**
     *
     * @param userDto - UserDto Object
     */
    void signup(UserDto userDto);

     /**
     * Let user login
     *
     * @param email - Email of the User
     * @param password - Password of the User
     */
    UserDto login(String email, String password);

  
 

}
