import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProject } from "../../redux/project/project.action";

import { MainContainer } from "./styles";
import ProfileNavbar from "../../layouts/navbar/profile/navbar";
import {
  ProjectContainer,
  DescriptionContainer,
  BackButton,
  FirstInfoContainer,
  Tags,
  ProjectAbout,
  InfoContainer,
  TagContainer,
  InfoLogoPackage,
  InfoPackage,
  OpenTags,
} from "./styles";

import SelectionComponent, {
  MyPlanet,
} from "../../components/selection-component/selection.component";

import {
  ButtonContainer,
  RouteButton,
} from "../../layouts/navbar/profile/styles";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.project);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/feed");
  };
  useEffect(() => {
    dispatch(getSingleProject(projectId));
  }, [dispatch]);
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <MainContainer>
      <ProfileNavbar></ProfileNavbar>
      <ProjectContainer>
        <DescriptionContainer>
          <BackButton onClick={handleGoBack}>Geri</BackButton>
          <FirstInfoContainer>
            <h2>#{project._id.substring(0, 11)}</h2>
            <h1>{project.title}</h1>
            <h4>3 gün önce paylaşıldı</h4>
            <h1></h1>
            <h3>Full Stack Web Projesi</h3>
          </FirstInfoContainer>
          <TagContainer>
            {Array.isArray(project.languages) ? (
              project.languages.map((language, index) => (
                <Tags key={index}>{language}</Tags>
              ))
            ) : (
              <p>Proje dilleri bulunamadı</p>
            )}
          </TagContainer>
          <h2>Proje Hakkında</h2>
          <ProjectAbout>{project.description}</ProjectAbout>
          <h2>Proje Rolleri</h2>
          <TagContainer>
            {Array.isArray(project.roles) ? (
              project.roles.map((role) =>
                project.openRoles.includes(role) ? (
                  <Tags key={role}> {role} </Tags>
                ) : (
                  <OpenTags key={role}> {role} </OpenTags>
                )
              )
            ) : (
              <p>No roles available</p>
            )}
          </TagContainer>

          <ProjectAbout></ProjectAbout>
        </DescriptionContainer>

        <InfoContainer>
          <InfoPackage>
            <InfoLogoPackage>
              <div></div>

              <h2>Süre</h2>
            </InfoLogoPackage>

            <h3>{project.duration}</h3>
          </InfoPackage>
          <InfoPackage>
            <InfoLogoPackage>
              <h2>Tarih</h2>
            </InfoLogoPackage>
            <h3>{project.postedTime.substring(0, 10)}</h3>
          </InfoPackage>
        </InfoContainer>
      </ProjectContainer>
    </MainContainer>
  );
};

export default ProjectPage;
