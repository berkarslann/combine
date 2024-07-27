package com.combine.matching.kafka;

import com.combine.matching.dto.ProjectDto;
import com.combine.matching.dto.ProjectEventDto;
import com.combine.matching.entity.Project;
import com.combine.matching.repository.ProjectRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Component;

@Component
public class ProjectKafkaListener {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @KafkaListener(topics = "projects-topic", groupId = "matching-service")
    public void listen(String message, Acknowledgment acknowledgment,
                       @Header(KafkaHeaders.OFFSET) long offset) {
        try {
  
            ProjectEventDto event = objectMapper.readValue(message, ProjectEventDto.class);

            String eventType = event.getEventType();
            ProjectDto project = event.getProject();

            switch (eventType) {
                case "CREATE":
                    Project newProject = new Project();
                    newProject.setProjectId(project.getProjectId());
                    newProject.setProjectName(project.getProjectName());
                    newProject.setProjectRoles(project.getProjectRoles());
                    newProject.setProjectOpenRoles(project.getProjectOpenRoles());
                    projectRepository.save(newProject);
                    System.out.println("Created new project: " + newProject);
                    break;

                case "UPDATE":
                    Project existingProject = projectRepository.findById(project.getProjectId()).orElse(null);
                    if (existingProject != null) {
                        existingProject.setProjectName(project.getProjectName());
                        existingProject.setProjectRoles(project.getProjectRoles());
                        existingProject.setProjectOpenRoles(project.getProjectOpenRoles());

                        projectRepository.save(existingProject);
                        System.out.println("Updated project: " + existingProject);
                    } else {
                        System.out.println("Project with ID " + project.getProjectId() + " not found for update.");
                    }
                    break;

                case "DELETE":
                    // Projeyi sil
                    if (projectRepository.existsById(project.getProjectId())) {
                        projectRepository.deleteById(project.getProjectId());
                        System.out.println("Deleted project: ID " + project.getProjectId());
                    } else {
                        System.out.println("Project with ID " + project.getProjectId() + " not found for deletion.");
                    }
                    break;

                default:
                    System.out.println("Unknown event type: " + eventType);
                    break;
            }

    
            acknowledgment.acknowledge();
        } catch (Exception e) {
            System.err.println("Failed to process message: " + e.getMessage());
        }
    }
}
