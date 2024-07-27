package com.combine.matching.service;

import com.combine.matching.dto.ProjectDto;

import java.util.List;

public interface MatchingService {

    void addProject(ProjectDto projectDto);

    void removeProject(String projectId);

    List<ProjectDto> findMatchingProjects(String role);

    void updateProjectRoles(String projectId, String role);
}
