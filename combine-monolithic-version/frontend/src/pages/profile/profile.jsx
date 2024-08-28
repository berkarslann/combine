import {
  ContentContainer,
  MainContainer,
  ProfileInfoContainer,
  TitleContainer,
  ImageContainer,
  GeneralInfoContainer,
  AppliedProject,
  AppliedProjectStatus,
  ImageGeneralContainer,
  UserSettings,
  PasswordInput,
  PasswordContainer,
} from "./style";
import { useEffect } from "react";
import ProfileNavbar from "../../layouts/navbar/profile/navbar";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { displayUser } from "../../redux/profile/profile.action";
import { Link } from "react-router-dom";
import { useState } from "react";
import bottle from "../../assets/bottle.png";
import { deleteProjectRequest } from "../../service/project-service";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const token = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(displayUser());
        setLoading(false); // Set loading to false once user information is fetched
      } catch (error) {
        console.error("Error fetching user information:", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchData();
  }, [dispatch]);

  const projects = profile.projects
  // const userLevel = getUserLevelFromBackend();
  const userLevel = `${profile.level}`;
  // Avatar URL'sini belirleyelim
  let avatarURL;

  const deleteProjectRequestHandle = async (projectId, token, role) => {
    try {
      await deleteProjectRequest(projectId, token, role);
    } catch (err) {
      console.log(err);
    }
  };

  switch (userLevel) {
    case "tecrübesiz":
      avatarURL = "https://api.dicebear.com/7.x/croodles/svg";
      break;
    case "junior":
      avatarURL = "https://api.dicebear.com/7.x/croodles/svg?seed=Annie";
      break;
    case "midlevel":
      avatarURL = "https://api.dicebear.com/7.x/croodles/svg?seed=Boo";
      break;
    case "pre-senior":
      avatarURL = "https://api.dicebear.com/7.x/croodles/svg?seed=Lilly";
      break;
    case "senior":
      avatarURL = "https://api.dicebear.com/7.x/croodles/svg?seed=Loki";
      break;
    default:
      avatarURL = "https://api.dicebear.com/7.x/croodles/svg?seed=default";
  }

  if (loading) {
    // Display loading indicator while waiting for user information
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      </div>
    );
  }
  return (
    <MainContainer>
      <ProfileNavbar selected={"profil"} />
      <ContentContainer>
        <ProfileInfoContainer>
          <TitleContainer>
            <h1>
              {profile.name.toUpperCase()} {profile.surname.toUpperCase()}
            </h1>
            <h3>{profile.title.toUpperCase()}</h3>
          </TitleContainer>
          <ImageGeneralContainer>
            <ImageContainer>
              <img src={avatarURL} alt="avatar" />
            </ImageContainer>
            <h3 style={{ color: "white" }}>{profile.level}</h3>
          </ImageGeneralContainer>
        </ProfileInfoContainer>

        <GeneralInfoContainer>
          <AppliedProject>
            <h1>Proje Talebi</h1>

            {projects.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={bottle}
                  alt="Description of the image"
                  style={{ width: "44%", height: "auto" }}
                />
                <p
                  style={{
                    color: "white",
                    fontFamily: '"Outfit", sans-serif;',
                  }}
                >
                  Şu anda proje talebiniz bulunmuyor. Projeler kısmından eşlenme
                  talep edebilirsiniz.
                </p>
              </div>
            ) : (
              projects.map((project, index) => (
                <Link to={`/feed/${project.project}`} key={index}>
                  <AppliedProjectStatus>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2>
                        <span style={{ fontStyle: "italic" }}>
                          {project.selectedRoles} developer olarak beni bir
                          projeye eşle
                        </span>
                      </h2>
                      <button
                        style={{
                          color: "purple",
                          width: "6%",
                          height: "6%",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          deleteProjectRequestHandle(
                            project.project,
                            token,
                            project.selectedRoles
                          )
                        }
                      >
                        Sil
                      </button>
                    </div>
                  </AppliedProjectStatus>
                </Link>
              ))
            )}
          </AppliedProject>

          <UserSettings>
            <h1>Kullanıcı Ayarları</h1>
            <h3>Şifreyi Güncelle</h3>
            <PasswordContainer>
              <PasswordInput placeholder="Mevcut şifreniz"></PasswordInput>
              <PasswordInput placeholder="Yeni şifreniz"></PasswordInput>
              <PasswordInput placeholder="Şifreyi yeniden girin"></PasswordInput>
            </PasswordContainer>
          </UserSettings>
        </GeneralInfoContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default ProfilePage;
