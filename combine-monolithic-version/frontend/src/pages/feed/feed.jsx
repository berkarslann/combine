import React, { useState, useEffect } from "react";
import { Button, NoProject } from "./styles";
import ProjectCard from "../../components/project-card/project-card";
import ProfileNavbar from "../../layouts/navbar/profile/navbar";
import { RouteButton } from "../../layouts/navbar/profile/styles";
import {
  MainContainer,
  ProjectContainer,
  HeroHeader,
  HeroContainer,
  BackgroundOverlay,
  ContentContainer,
} from "./styles";
import MatchScreen from "../../components/match/match";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../redux/project/project.action";
import { loginUser } from "../../redux/user/user.action";
import mouth from "../../assets/mouth.png";

const FeedPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects) || [];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProjects());
        setTimeout(() => {
          setLoading(false);
        }, 700);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <MainContainer>
      <ProfileNavbar selected={"projeler"} />

      <ContentContainer>
        {isFormVisible && <BackgroundOverlay />}
        <ProjectContainer>
          <HeroContainer>
            <HeroHeader>Açık Projeler</HeroHeader>
            <Button onClick={handleButtonClick}>Beni bir projeye eşle!</Button>
          </HeroContainer>

          {loading ? (
            <div>
              <NoProject></NoProject>
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "white" }}>Projeler yükleniyor...</p>
              </div>
            </div>
          ) : projects.length === 0 ? (
            <NoProject style={{ color: "white" }}>
              <img
                src={mouth}
                alt="avatar"
                style={{
                  width: "34%",
                  height: "auto",
                  transform: "rotate(10deg)",
                  marginTop: "1rem",
                }}
              />
              <h2>Whoa, nasıl olur?</h2>
              <h3>
                Şu an için açık bir proje yok. Ama endişelenmeyin, her gün
                yenilerini ekliyoruz, dolayısıyla daha fazlası da gelecek.
                Dilerseniz siz de proje oluşturabilirsiniz.
              </h3>
            </NoProject>
          ) : (
            <div>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </ProjectContainer>
      </ContentContainer>

      {isFormVisible && <MatchScreen onButtonClick={handleButtonClick} />}
    </MainContainer>
  );
};

export default FeedPage;
