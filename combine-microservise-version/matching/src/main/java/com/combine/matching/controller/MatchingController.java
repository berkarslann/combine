package com.combine.matching.controller;

import com.combine.matching.dto.MatchRequestDto;
import com.combine.matching.dto.ProjectDto;
import com.combine.matching.entity.UserProjects;
import com.combine.matching.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/matching")
public class MatchingController {

    @Autowired
    private MatchingService matchingService;

    @PostMapping("/match")
    public ResponseEntity<?> matchProject(@RequestBody MatchRequestDto request) {
        String userEmail = request.getUserEmail();
        String wantedRole = request.getWantedRole();

        List<ProjectDto> matchingProjects = matchingService.findMatchingProjects(wantedRole);

        if (matchingProjects.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No matching projects found.");
        }

        ProjectDto firstMatchingProject = matchingProjects.get(0);

        UserProjects userProjects = new UserProjects();
        userProjects.setProjectId(firstMatchingProject.getProjectId());
        userProjects.setSelectedRoles(Collections.singletonList(wantedRole));

        matchingService.updateProjectRoles(firstMatchingProject.getProjectId(), wantedRole);

        return ResponseEntity.ok(matchingProjects);
    }
}
