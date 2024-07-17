import React from "react";

import {
  MainContainer,
  ContentContainer,
  SideNote,
  SideNoteV2,
  SideNoteV3,
  SideNoteV4,
  SideButton,
  GlitchButton,
  StepNote,
  Steps,
  UniInfo,
  StepInfoContainer,
  StepInfoContainerV2,
  DotPatternContainer,
  Dot,
  LightInfoContainer,
  LightInfo,
  VisionContentContainer,
  VisionContentInfoContainer,
  StairsContainer,
  StairsInfoContainer,
  DesignedDiv
} from "./styles";
import ünis from "../../assets/ünis.png";
import goz from "../../assets/goz.png";
import unico from "../../assets/unico.png";
import ag from "../../assets/ag.png";
import el from "../../assets/el.png";
import bukelamun from "../../assets/bukelamun.png";
import torch from "../../assets/torch.png";
import puzzle from "../../assets/puzzle.png";
import pirate from "../../assets/pirate.png";
import stairs from "../../assets/stairs.png";
import babel from '../../assets/babel.png'
import { Link } from "react-router-dom";

import HomeNavbar from "../../layouts/navbar/home/navbar";
import CommentCarousel from "../../components/comment-carousel/comments-carousel";
import HomeFooter from "../../layouts/footer/home/home";






const HomePage = () => {
  const dotCount = 10;


  return (
    <MainContainer>
      <HomeNavbar></HomeNavbar>

      <ContentContainer>
        <SideNote>
          GELİŞTİRİCİ ADAYLARIN TEORİK BİLGİLERİNİ PROJE DENEYİMLERİYLE
          GELİŞTİRİYORUZ
        </SideNote>
        <SideNoteV2>
          // kaynak cehennemine girip hiç gelişememekten sıkılmadınız mı?
          projelere dahil olarak pratik yapın - şeytani bir hızla
        </SideNoteV2>
        <Link to='/feed' >
        <GlitchButton >beni bir projeye eşle</GlitchButton>

        </Link>
      </ContentContainer>

      <UniInfo>
        <img
          src={ünis}
          alt="Description of the image"
          style={{ width: "100%", height: "auto" }}
        />
      </UniInfo>

      <ContentContainer>
        <StepNote>
          KURS MATERYALLERİNDE KAYBOLMA,{" "}
          <span style={{ color: "#8dfce6" }}>PRATİK YAPABİLECEĞİN</span> BİR
          PROJEYE DAHİL OL
        </StepNote>
        <StepInfoContainer>
          <img
            src={ag}
            alt="Description of the image"
            style={{ width: "40%", height: "auto" }}
          />
          <SideNoteV4>materyal cehenneminde sıkışıp kaldınız</SideNoteV4>
        </StepInfoContainer>
        <DotPatternContainer>
          {Array.from({ length: dotCount }, (_, index) => (
            <Dot key={index} style={{ animationDelay: `${index * 0.2}s` }} />
          ))}
        </DotPatternContainer>
        <StepInfoContainerV2>
          <SideNoteV3>
            elinizi kirletmeniz gerektiğinin farkındasınız
          </SideNoteV3>
          <img
            src={el}
            alt="Description of the image"
            style={{ width: "30%", height: "auto" }}
          />
        </StepInfoContainerV2>

        <StepInfoContainer>
          <img
            src={goz}
            alt="Description of the image"
            style={{ width: "30%", height: "auto" }}
          />
          <SideNoteV4>
            bir ekiple eşleşerek bu oyuna dahil olacaksınız
          </SideNoteV4>
        </StepInfoContainer>
        <DotPatternContainer>
          {Array.from({ length: dotCount }, (_, index) => (
            <Dot key={index} style={{ animationDelay: `${index * 0.2}s` }} />
          ))}
        </DotPatternContainer>
        <StepInfoContainerV2>
          <SideNoteV3>
            yarınki geleceğiniz, dün sahip olduğunuz geleceğinizden farklı
            olacak
          </SideNoteV3>
          <img
            src={unico}
            alt="Description of the image"
            style={{ width: "80%", height: "auto" }}
          />
        </StepInfoContainerV2>
      </ContentContainer>

      <ContentContainer>
        <StepNote>
          {" "}
          <span style={{ color: "#5f9739" }}>COMBINE</span> IŞIĞI ALTINDA
          GELİŞİN
        </StepNote>
      </ContentContainer>

      <LightInfoContainer>
        <LightInfo>
          <img
            src={puzzle}
            alt="Description of the image"
            style={{ width: "70%", height: "auto" }}
          />
          <h2>en uygun eşleşme</h2>
        </LightInfo>
        <LightInfo>
          <img
            src={torch}
            alt="Description of the image"
            style={{ width: "27%", height: "auto" }}
          />
          <h2>proje arayan geliştiriciler</h2>
        </LightInfo>
        <LightInfo>
          <img
            src={bukelamun}
            alt="Description of the image"
            style={{ width: "40%", height: "auto" }}
          />
          <h2>geliştirici değiştirme garantisi</h2>
        </LightInfo>
      </LightInfoContainer>

      <VisionContentContainer>
        <VisionContentInfoContainer>
          <StepNote>
            VİZYONUNUZU HAYATA GEÇİRECEK{" "}
            <span style={{ color: "#8dfce6" }}>NİTELİKLİ PROJELER</span>
          </StepNote>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <SideNoteV2>
              // yıkıcı bir öğrenme tutkunuz var. bunu pratiğe dökebilecek
              mucizevi projelere sahibiz. ama endişelenme, harika bir proje
              fikrin varsa mürettabat toplaman için de sana yardım edeceğiz
            </SideNoteV2>
          </div>

          <GlitchButton>bana bir ekip kur</GlitchButton>
        </VisionContentInfoContainer>
        <img
          src={pirate}
          alt="Description of the image"
          style={{ width: "24%", height: "auto" }}
        />
      </VisionContentContainer>

      <StairsContainer>
        <img
          src={stairs}
          alt="Description of the image"
          style={{ width: "34%", height: "auto" }}
        />
        <StairsInfoContainer>
          <h2>
            projeye katkı sağlamayacak ciddi olmayan geliştiricileri{" "}
            anında projeden
            çıkarıyoruz
          </h2>
          <h2>
            gerçek anlamda bir öğrenme
            deneyimi yaşamak isteyen kişileri seçiyoruz
          </h2>
          <h2>
            takım liderleri, tecrübeli
            kişilerden seçiliyor
          </h2>
          <h2>
            sadece teknik becelerileri geliştirmeye değil,{" "}
            sosyal becerileri de
            geliştirmeyi amaçlıyoruz
          </h2>
        </StairsInfoContainer>
      </StairsContainer>

      <ContentContainer>
        <StepNote>
        SİZDEN ÖNCEKİ   <span style={{ color: "#8dfce6" }}>DİĞERLERİ</span> GİBİ
        </StepNote>
        <CommentCarousel/>
      </ContentContainer>

      <ContentContainer>
        <StepNote style={{textAlign:'right'}}>
        Babil Kulesi'nden daha fazla <span style={{ color: "#8dfce6" }}>dile</span> hakim olmak
        </StepNote>
      <img
          src={babel}
          alt="Description of the image"
          style={{ width: "70%", height: "auto"}}
        />
        <DesignedDiv data-text=" javascript python java expressss react vue spring django ruby on rails golang asp.net c++ mongodb mysql linux heroku nginx apache jenkins  ">

        </DesignedDiv>

      </ContentContainer>


          <HomeFooter/>
    </MainContainer>
  );
};

export default HomePage;
