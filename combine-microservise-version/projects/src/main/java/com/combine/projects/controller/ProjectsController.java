package com.combine.projects.controller;

import com.combine.projects.dto.ProjectsDto;
import com.combine.projects.dto.ResponseDto;
import com.combine.projects.service.IProjectService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

/**
 * CRUD REST APIs for Projects in Combine.
 * CRUD REST APIs in Combine to CREATE, UPDATE, FETCH AND DELETE project
 * details.
 * 
 * @author Oral Berk Arslan
 */
@Tag(name = "CRUD REST APIs for Projects in Combine", description = "CRUD REST APIs in Combine to CREATE, UPDATE, FETCH AND DELETE project details")
@RestController
@RequestMapping("/api")
@Validated
public class ProjectsController {

    private final IProjectService iProjectService;

    public ProjectsController(IProjectService iProjectService) {
        this.iProjectService = iProjectService;
    }

    @Operation(summary = "Create Project REST API", description = "REST API to create new Project inside Combine")
    @ApiResponses({
            @ApiResponse(responseCode = "201", description = "HTTP Status CREATED"),
            @ApiResponse(responseCode = "500", description = "HTTP Status Internal Server Error")
    })
    @PostMapping("/create")
    public ResponseEntity<ResponseDto> createProject(@Valid @RequestBody ProjectsDto projectsDto) {
        try {
            iProjectService.createProject(projectsDto);
            ResponseDto response = new ResponseDto("Project created successfully", null);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            ResponseDto response = new ResponseDto("Failed to create project: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            ResponseDto response = new ResponseDto("Internal server error: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @Operation(summary = "Get All Projects REST API", description = "REST API to get all Projects inside Combine")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "HTTP Status OK"),
            @ApiResponse(responseCode = "500", description = "HTTP Status Internal Server Error")
    })
    @GetMapping("/projects")
    public ResponseEntity<List<ProjectsDto>> getAllProjects() {
        try {
            List<ProjectsDto> projects = iProjectService.getAllProjects();
            return ResponseEntity.ok(projects);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Operation(summary = "Delete Project REST API", description = "REST API to delete the Project inside Combine")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "HTTP Status OK"),
            @ApiResponse(responseCode = "500", description = "HTTP Status Internal Server Error")
    })
    @DeleteMapping("/delete/{projectNumber}")
    public ResponseEntity<ResponseDto> deleteProject(@PathVariable String projectNumber) {
        try {
            iProjectService.deleteProject(projectNumber);
            ResponseDto response = new ResponseDto("Project deleted successfully", null);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            ResponseDto response = new ResponseDto("Failed to delete project: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            ResponseDto response = new ResponseDto("Internal server error: " + e.getMessage(), null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
