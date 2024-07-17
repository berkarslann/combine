import React, { useState, useEffect } from "react";

import {
  ProjectCardContainer,
  ProjectGeneralInfoContainer,
  ProjectEmptyRoleContainer,
  ProjectRole,
  NavButton,
  StyledButton,
  ProjectDetailsContainer,
  ProjectDetailsExpContainer,
  ProjectEmptyRoleContainerV2,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../redux/project/project.action";
import projectSlice from "../../redux/project/projectSlice";
import { Link } from "react-router-dom";
import { GiDuration } from "react-icons/gi";
import { GoPersonFill } from "react-icons/go";
import { TbSteam } from "react-icons/tb";



const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <h1 style={{ color: "white" }}>{project.title.toUpperCase()}</h1>
      <ProjectGeneralInfoContainer>
        <h3 style={{ color: "#944779" }}>{project.creator.toUpperCase()}</h3>
        <div style={{ display: "flex" }}>
          <h5 style={{ marginRight: "0.5rem", color: "gray" }}>
            {project.postedTime.substring(0, 10)}
          </h5>
          <h5 style={{ color: "gray" }}>#{project._id.substring(0, 6)}</h5>
        </div>
      </ProjectGeneralInfoContainer>
      <ProjectEmptyRoleContainer>
        <div style={{ display: "flex" }}>
          {project.languages.map((language, index) => (
            <ProjectRole key={index}>{language}</ProjectRole>
          ))}
        </div>

        <div>
          <Link to={`/feed/${project._id}`}>
            <StyledButton>Ayrıntılı Bilgi</StyledButton>
          </Link>
        </div>
      </ProjectEmptyRoleContainer>

      <ProjectEmptyRoleContainerV2>
        <ProjectDetailsContainer>
          <GiDuration
            style={{ color: "white", width: "2rem", height: "2rem" }}
          />
          <ProjectDetailsExpContainer>
            <h4>Süre</h4>
            <h5>{project.duration}</h5>
          </ProjectDetailsExpContainer>
        </ProjectDetailsContainer>
        <ProjectDetailsContainer>
          <GoPersonFill

            style={{ color: "white", width: "2rem", height: "2rem" }}
          />
          <ProjectDetailsExpContainer>
            <h4>Takım</h4>
            <h5>{project.teamSize} kişi</h5>
          </ProjectDetailsExpContainer>
        </ProjectDetailsContainer>
        <ProjectDetailsContainer>
          <TbSteam 
            style={{ color: "white", width: "2rem", height: "2rem" }}
          />
          <ProjectDetailsExpContainer>
            <h4>Açık Roller</h4>
            <h5>{project.openRoles.join(' ')}</h5>
          </ProjectDetailsExpContainer>
        </ProjectDetailsContainer>
      </ProjectEmptyRoleContainerV2>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
