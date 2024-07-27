package com.combine.projects.dto;

public class ProjectEventDto {
    
    private String eventType; 
    private ProjectsDto project; 


    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public ProjectsDto getProject() {
        return project;
    }

    public void setProject(ProjectsDto project) {
        this.project = project;
    }

    @Override
    public String toString() {
        return "ProjectEventDto{" +
                "eventType='" + eventType + '\'' +
                ", project=" + project +
                '}';
    }
}
