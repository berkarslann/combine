package com.combine.projects.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Random;


@Entity
@Getter @Setter @ToString
public class Project extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_id")
    private Long projectId;

    @Column(name="project_type", nullable = false)
    private String projectType;

    @Column(name="project_name", nullable = false)
    private String projectName;

    @Column(name="project_number", nullable = false, unique = true)
    private String projectNumber;

    @PrePersist
    public void generateProjectNumber() {
        Random random = new Random();
        this.projectNumber = String.valueOf(1000000000 + random.nextInt(900000000)); // 1000000000 ile 9999999999 arasında bir sayı
    }

    @Column(name="project_creator", nullable = false)
    private String projectCreator;

    @Column(name="project_leader")
    private String projectLeader;

    @Column(name="project_duration")
    private Integer projectDuration;

    @Column(name="project_description")
    private String projectDescription;

    @Column(name="project_team_size")
    private Integer projectTeamSize;

  
    @Column(name="project_languages")
    private String projectLanguages;

    
    @Column(name="project_roles")
    private String projectRoles;

   
    @Column(name="project_open_roles")
    private String projectOpenRoles;

  
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProjectMember> projectMembers;

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public boolean isPresent() {
        return false;
    }
}
