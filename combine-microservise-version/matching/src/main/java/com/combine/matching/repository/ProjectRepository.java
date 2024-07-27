package com.combine.matching.repository;

import com.combine.matching.entity.Project;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    
    Optional<Project> findById(String string);
}
