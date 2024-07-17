package com.combine.auth.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.combine.auth.dto.ResponseDto;
import com.combine.auth.dto.UserDto;
import com.combine.auth.service.IAuthService;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.RequestBody; // Eksik olan import
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author Oral Berk Arslan
 */

@Tag(name = "CRUD REST APIs for Projects in Combine", description = "CRUD REST APIs in Combine to CREATE, UPDATE, FETCH AND DELETE project details")
@RestController
@RequestMapping("/api")
@Validated
public class AuthController {

    private final IAuthService iAuthService;
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(IAuthService iAuthService) {
        this.iAuthService = iAuthService;
    }

    @Operation(summary = "Signup REST API", description = "REST API for signing up to Combine")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "HTTP Status CREATED"),
            @ApiResponse(responseCode = "500", description = "HTTP Status Internal Server Error")
    })
    @PostMapping("/signup")
    public ResponseEntity<ResponseDto> signup(@Valid @RequestBody UserDto userDto) {

        try {
            iAuthService.signup(userDto);
            ResponseDto response = new ResponseDto("User created successfully", null);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            logger.error("Error creating user: {}", e.getMessage());
            return ResponseEntity.badRequest().body(new ResponseDto(e.getMessage(), null));
        } catch (Exception e) {
            logger.error("Unexpected error: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ResponseDto("An error occurred while creating the user", null));
        }
    }

    @Operation(summary = "Login REST API", description = "REST API for logging to Combine")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "HTTP Status CREATED"),
            @ApiResponse(responseCode = "500", description = "HTTP Status Internal Server Error")
    })
    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@Valid @RequestBody UserDto userDto) {
        logger.info("Login attempt for user: {}", userDto.getEmail());
        try {
            UserDto loggedInUser = iAuthService.login(userDto.getEmail(), userDto.getPassword());
            if (loggedInUser != null) {
                return ResponseEntity.ok(loggedInUser);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Unauthorized
            }
        } catch (IllegalArgumentException e) {
            logger.error("Invalid login attempt: {}", e.getMessage());
            return ResponseEntity.badRequest().build(); // Bad Request
        } catch (Exception e) {
            logger.error("Unexpected error during login: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Internal Server Error
        }
    }

}
