package com.combine.projects.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.combine.projects.dto.ProjectsDto;
import com.combine.projects.entity.Project;
import com.combine.projects.mapper.ProjectMapper;
import com.combine.projects.repository.ProjectRepository;
import com.combine.projects.service.IProjectService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements IProjectService {

    private ProjectRepository projectRepository;

    /**
     * @param project - Project Object
     */
    @Override
    public void createProject(ProjectsDto projectsDto) {
        try {
            Project project = ProjectMapper.mapToProject(projectsDto, new Project());
            if (project.isPresent()) {
                throw new IllegalArgumentException("Project already exists.");
            }
            // It will send it to Kafka on the new version.
            Project savedProject = projectRepository.save(project);
        } catch (IllegalArgumentException e) {
            // Handle the specific exception
            throw e;
        } catch (Exception e) {
            // Handle other exceptions
            throw new RuntimeException("Failed to create project", e);
        }
    }

    @Override
    public List<ProjectsDto> getAllProjects() {
        try {

            List<Project> projects = projectRepository.findAll();

            List<ProjectsDto> projectsDtos = projects.stream()
                    .map(project -> ProjectMapper.mapTopProjectsDto(project, new ProjectsDto()))
                    .collect(Collectors.toList());

            return projectsDtos;
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch all projects", e);
        }
    }

    @Override
    public ProjectsDto fetchProject(String projectNumber) {
        throw new UnsupportedOperationException("Unimplemented method 'fetchProject'");
    }

    @Override
    public void deleteProject(String projectNumber) {
        try {
            Project project = projectRepository.findByProjectNumber(projectNumber)
                    .orElseThrow(
                            () -> new IllegalArgumentException(
                                    "Project not found with projectNumber: " + projectNumber));
            projectRepository.delete(project);
        } catch (IllegalArgumentException e) {

            throw e;
        } catch (Exception e) {

            throw new RuntimeException("Failed to delete project", e);
        }
    }

}
