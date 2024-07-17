package com.combine.auth.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.combine.auth.dto.UserDto;
import com.combine.auth.entity.User;
import com.combine.auth.mapper.UserMapper;
import com.combine.auth.repository.UserRepository;
import com.combine.auth.service.IAuthService;
import com.combine.auth.util.JwtUtil;

import lombok.AllArgsConstructor;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    public void signup(UserDto userDto) {
        try {
            Optional<User> existingUser = userRepository.findByEmail(userDto.getEmail());
            if (existingUser.isPresent()) {
                throw new IllegalArgumentException("User already exists.");
            }
            User user = UserMapper.mapToUser(userDto, new User());
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
            if (user.isPresent()) {
                throw new IllegalArgumentException("User already exists.");
            }

            // I hold savedUser because I will push it via Kafka or RabbitMQ.
            User savedUser = userRepository.save(user);

        } catch (IllegalArgumentException e) {
            // Geçersiz argüman hatası
            // Loglama yapabilir veya başka bir işlem gerçekleştirebilirsiniz
            throw new IllegalArgumentException("User creation failed.");
        } catch (Exception e) {
            // Genel hata yönetimi
            throw new IllegalArgumentException("User creation failed.");
        }
    }

    @Override
    public UserDto login(String email, String password) {
        try {
            Optional<User> optionalUser = userRepository.findByEmail(email);
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                if (passwordEncoder.matches(password, user.getPassword())) {
                    UserDto userDto = UserMapper.mapToUserDto(user, new UserDto());
                    userDto.setAccessToken(jwtUtil.generateToken(user.getEmail()));
                    return userDto;
                }
            }
            return null;
        } catch (Exception e) {
            throw new RuntimeException("An error occurred during login.", e); // Beklenmeyen hata
        }
    }

}
