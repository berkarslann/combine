package com.combine.projects.repository;

import com.combine.projects.entity.Project;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;




@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    
    Project findByProjectNumber(String projectNumber);



}   
