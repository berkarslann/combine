package com.combine.matching.dto;

import lombok.Data;

@Data
public class ProjectEventDto {
    private String eventType; 
    private ProjectDto project;
}
