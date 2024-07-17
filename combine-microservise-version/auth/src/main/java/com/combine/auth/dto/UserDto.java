package com.combine.auth.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Schema(name = "User", description = "Schema to hold User Information")
public class UserDto {

    @NotEmpty(message = "Email can not be a null or empty")
    @Schema(description = "Mail of the user", example = "berk@gmail.com")
    @Email(message = "Email should be valid")
    private String email;

    @NotEmpty(message = "Password can not be a null or empty")
    @Schema(description = "Password of the user", example = "123456")
    private String password;

    @Schema(description = "Name of the user", example = "Berk")
    private String name;

    @Schema(description = "Surname of the user", example = "Arslan")
    private String surname;

    @Schema(description = "Level of the user", example = "Mid")
    private String level;

    @Schema(description = "Title of the user", example = "Backend Developer")
    private String title;

    private String accessToken; 
}
