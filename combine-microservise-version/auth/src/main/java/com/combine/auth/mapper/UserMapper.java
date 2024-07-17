package com.combine.auth.mapper;

import com.combine.auth.dto.UserDto;
import com.combine.auth.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user, UserDto userDto) {
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setSurname(user.getSurname());
    
        return userDto;
    }

    public static User mapToUser(UserDto userDto, User user) {
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setSurname(userDto.getSurname());
    
        return user;
    }
}
