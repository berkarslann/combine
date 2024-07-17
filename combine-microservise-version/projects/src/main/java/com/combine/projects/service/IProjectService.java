package com.combine.projects.service;

import java.util.List;

import com.combine.projects.dto.ProjectsDto;

public interface IProjectService {
    
    /**
     *
     * @param projectDto - ProjectDto Object
     */
    void createProject(ProjectsDto projectsDto);

    /**
     *
     * @param projectNumber - Input Project Number
     * @return Project Details based on a given project number
     */
    ProjectsDto fetchProject(String projectNumber);

    /**
     *

     * @return Projects 
     */
    List<ProjectsDto> getAllProjects();

    /**
     *
     * @param projectDto - ProjectDto Object
     * @return boolean indicating if the update of Project details is successful or not
     */
    // boolean updateProject(ProjectsDto projectDto);


    /**
     *
     * @param projectNumber - Input Project Number
     * @return boolean indicating if the delete of Account details is successful or not
     */
    void deleteProject(String projectNumber);
}
