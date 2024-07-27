package com.combine.projects.service;

import java.util.List;

import com.combine.projects.dto.ProjectsDto;

public interface IProjectService {
    
    /**
     * Create a new project.
     * 
     * @param projectsDto - ProjectDto Object
     */
    void createProject(ProjectsDto projectsDto);

    /**
     * Fetch details of a project based on a given project number.
     * 
     * @param projectNumber - Input Project Number
     * @return Project Details based on a given project number
     */
    ProjectsDto fetchProject(String projectNumber);

    /**
     * Get a list of all projects.
     * 
     * @return List of Projects
     */
    List<ProjectsDto> getAllProjects();

    /**
     * Update project details based on the project number.
     * 
     * @param projectNumber - Input Project Number
     * @param projectsDto - ProjectDto Object containing updated project details
     * @return boolean indicating if the update was successful or not
     */
    boolean updateProject(String projectNumber, ProjectsDto projectsDto);

    /**
     * Delete a project based on the project number.
     * 
     * @param projectNumber - Input Project Number
     * @return boolean indicating if the delete was successful or not
     */
    void deleteProject(String projectNumber);
}
