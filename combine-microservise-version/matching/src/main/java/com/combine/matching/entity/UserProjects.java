package com.combine.matching.entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @ToString
public class UserProjects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_projects_id")
    private Long id;

    @Column(name="project_id")
    private Long projectId;

    @ElementCollection
    @CollectionTable(name = "selected_roles", joinColumns = @JoinColumn(name = "user_projects_id"))
    @Column(name = "role")
    private List<String> selectedRoles;

}
