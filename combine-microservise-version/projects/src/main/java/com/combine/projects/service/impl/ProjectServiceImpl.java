package com.combine.projects.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.combine.projects.dto.ProjectsDto;
import com.combine.projects.dto.ProjectEventDto;
import com.combine.projects.entity.Project;
import com.combine.projects.kafka.ProjectKafkaProducer;
import com.combine.projects.mapper.ProjectMapper;
import com.combine.projects.repository.ProjectRepository;
import com.combine.projects.service.IProjectService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements IProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectKafkaProducer kafkaProducer;

    @Override
    public void createProject(ProjectsDto projectsDto) {
        try {
            Project project = ProjectMapper.mapToProject(projectsDto, new Project());
            projectRepository.save(project);

       
            ProjectEventDto eventDto = new ProjectEventDto();
            eventDto.setEventType("CREATE");
            eventDto.setProject(projectsDto);
            kafkaProducer.sendMessage("projects-topic", eventDto);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Failed to create project", e);
        }
    }

    @Override
    public List<ProjectsDto> getAllProjects() {
        try {
            List<Project> projects = projectRepository.findAll();

            return projects.stream()
                    .map(project -> ProjectMapper.mapTopProjectsDto(project, new ProjectsDto()))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch all projects", e);
        }
    }

    @Override
    public ProjectsDto fetchProject(String projectNumber) {
        try {
            Project project = projectRepository.findByProjectNumber(projectNumber);
            return ProjectMapper.mapTopProjectsDto(project, new ProjectsDto());
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch project", e);
        }
    }

    @Override
    public boolean updateProject(String projectNumber, ProjectsDto projectsDto) {
        try {
            Project existingProject = projectRepository.findByProjectNumber(projectNumber);
            if (existingProject != null) {
                Project updatedProject = ProjectMapper.mapToProject(projectsDto, existingProject);
                projectRepository.save(updatedProject);

                ProjectEventDto eventDto = new ProjectEventDto();
                eventDto.setEventType("UPDATE");
                eventDto.setProject(projectsDto);
                kafkaProducer.sendMessage("projects-topic", eventDto);
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new RuntimeException("Failed to update project", e);
        }
    }

    @Override
    public void deleteProject(String projectNumber) {
        try {
            Project project = projectRepository.findByProjectNumber(projectNumber);
            if (project != null) {
                projectRepository.delete(project);

                ProjectEventDto eventDto = new ProjectEventDto();
                eventDto.setEventType("DELETE");
                eventDto.setProject(null); // No project details needed for delete
                kafkaProducer.sendMessage("projects-topic", eventDto);
            }
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete project", e);
        }
    }
}
