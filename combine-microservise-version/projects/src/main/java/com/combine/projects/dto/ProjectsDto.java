package com.combine.projects.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Schema(name = "Projects", description = "Schema to hold Project Information")
public class ProjectsDto {

   
    @Pattern(regexp = "\\d{10}", message = "ProjectNumber must be 10 digits")
    @Schema(description = "Project Number of Combine project", example = "3454433243")
    private String projectNumber;

    @NotEmpty(message = "ProjectName can not be a null or empty")
    @Schema(description = "Name of the project", example = "AirBnb Clone Project")
    private String projectName;

    @NotEmpty(message = "ProjectType can not be a null or empty")
    @Schema(description = "Type of the project", example = "Fullstack Project or Backend Project")
    private String projectType;

    @NotEmpty(message = "ProjectCreator can not be a null or empty")
    @Schema(description = "Creator of the project", example = "Admin")
    private String projectCreator;

    @Schema(description = "Duration of the project in months", example = "6")
    private Integer projectDuration;

    @Schema(description = "Description of the project", example = "A web application for team collaboration")
    private String projectDescription;

    @Schema(description = "Size of the project team", example = "5")
    private Integer projectTeamSize;

    @Schema(description = "Programming languages used in the project", example = "[\"Java\", \"JavaScript\"]")
    private String projectLanguages;

    @Schema(description = "Roles in the project team", example = "[\"Backend Developer\", \"Frontend Developer\"]")
    private String projectRoles;

    @Schema(description = "Open roles in the project team", example = "[\"UI Designer\", \"Database Administrator\"]")
    private String projectOpenRoles;

    @Schema(description = "Members of the project team", example = "[\"Alice\", \"Bob\"]")
    private String projectMembers;
}
