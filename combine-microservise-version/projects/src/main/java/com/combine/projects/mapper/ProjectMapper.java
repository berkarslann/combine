package com.combine.projects.mapper;

import com.combine.projects.dto.ProjectsDto;
import com.combine.projects.entity.Project;

public class ProjectMapper {

    public static ProjectsDto mapTopProjectsDto(Project project, ProjectsDto projectsDto) {
        projectsDto.setProjectType(project.getProjectType());
        projectsDto.setProjectName(project.getProjectName());
        projectsDto.setProjectCreator(project.getProjectCreator());
        projectsDto.setProjectDuration(project.getProjectDuration());
        projectsDto.setProjectDescription(project.getProjectDescription());
        projectsDto.setProjectTeamSize(project.getProjectTeamSize());
        projectsDto.setProjectLanguages(project.getProjectLanguages());
        projectsDto.setProjectRoles(project.getProjectRoles());
        projectsDto.setProjectOpenRoles(project.getProjectOpenRoles());
        // projectsDto.setProjectMembers(project.getProjectMembers());

        return projectsDto;
    }

    public static Project mapToProject(ProjectsDto projectsDto, Project project) {
        project.setProjectType(projectsDto.getProjectType());
        project.setProjectName(projectsDto.getProjectName());
        project.setProjectCreator(projectsDto.getProjectCreator());
        project.setProjectDuration(projectsDto.getProjectDuration());
        project.setProjectDescription(projectsDto.getProjectDescription());
        project.setProjectTeamSize(projectsDto.getProjectTeamSize());
        project.setProjectLanguages(projectsDto.getProjectLanguages());
        project.setProjectRoles(projectsDto.getProjectRoles());
        project.setProjectOpenRoles(projectsDto.getProjectOpenRoles());
        // project.setProjectMembers(projectsDto.getProjectMembers());
        return project;
    }
}
