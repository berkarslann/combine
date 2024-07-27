package com.combine.matching.repository;

import com.combine.matching.entity.UserProjects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProjectsRepository extends JpaRepository<UserProjects, Long> {

}
