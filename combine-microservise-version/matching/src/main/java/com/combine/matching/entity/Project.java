package com.combine.matching.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "projects")
@Setter
public class Project {

    @Id
    @Column(name = "project_id")
    private String projectId;  

    @Column(name = "project_name")
    private String projectName;  

    @Column(name = "project_roles")
    private String projectRoles; 

    @Column(name = "project_open_roles")
    private String projectOpenRoles;

    public String getProjectOpenRoles() {
        return null;
    }  
}
