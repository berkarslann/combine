package com.combine.matching.service.impl;

import com.combine.matching.dto.ProjectDto;
import com.combine.matching.entity.Project;
import com.combine.matching.repository.ProjectRepository;
import com.combine.matching.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IMatchingServiceImpl implements MatchingService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public void addProject(ProjectDto projectDto) {
        Project project = convertToEntity(projectDto);
        projectRepository.save(project);
    }

    @Override
    public void removeProject(String projectId) {
        Project project = projectRepository.findById(projectId)
            .orElseThrow(() -> new IllegalArgumentException("Project with ID " + projectId + " does not exist."));

        projectRepository.delete(project);
    }

    @Override
    public List<ProjectDto> findMatchingProjects(String role) {
        List<Project> allProjects = projectRepository.findAll();

        return allProjects.stream()
            .filter(project -> project.getProjectOpenRoles().contains(role))
            .map(this::convertToDto)
            .collect(Collectors.toList());
    }

    @Override
    public void updateProjectRoles(String projectId, String role) {
        Project project = projectRepository.findById(projectId)
            .orElseThrow(() -> new IllegalArgumentException("Project with ID " + projectId + " does not exist."));

        project.getProjectOpenRoles().remove(role);
        projectRepository.save(project);
    }

    private ProjectDto convertToDto(Project project) {
        // Convert Project entity to ProjectDto
        ProjectDto dto = new ProjectDto();
        dto.setProjectId(project.getProjectId());
        dto.setProjectName(project.getProjectName());
        dto.setProjectRoles(project.getProjectRoles());
        dto.setProjectOpenRoles(project.getProjectOpenRoles());
        return dto;
    }

    private Project convertToEntity(ProjectDto projectDto) {
        // Convert ProjectDto to Project entity
        Project project = new Project();
        project.setProjectId(projectDto.getProjectId());
        project.setProjectName(projectDto.getProjectName());
        project.setProjectRoles(projectDto.getProjectRoles());
        project.setProjectOpenRoles(projectDto.getProjectOpenRoles());
        return project;
    }
}