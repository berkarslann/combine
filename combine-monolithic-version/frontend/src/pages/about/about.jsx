import {
  MainContainer,
  ContentContainer,
  SideNoteV5,
  SideNoteV2,
  SideNoteV4,
} from "./styles";
import HomeNavbar from "../../layouts/navbar/home/navbar";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <MainContainer>
      <HomeNavbar></HomeNavbar>
      <ContentContainer>
        <SideNoteV5>BİZ COMBINE'IZ.</SideNoteV5>
        <SideNoteV2>biz, tipik bir iş bulma platformu değiliz.</SideNoteV2>
        <SideNoteV2>
          biz, size kurs satmaya çalışan kurtlardan değiliz.
        </SideNoteV2>
        <SideNoteV2>
          biz, size hızlı zenginlik vaat edenlerden değiliz.{" "}
        </SideNoteV2>
        <SideNoteV4>
          combine; pratik yapabilmeniz için size uygun yazılım proje ekipleri
          bulan özel bir topluluk.
        </SideNoteV4>
        <SideNoteV2>bu hikayenin kahramanı sizsiniz.</SideNoteV2>
        <SideNoteV2>filmin sonunda prensesi kurtaran sizsiniz.</SideNoteV2>
        <SideNoteV2>
          biz mi? sadece bunu başarmanıza yardımcı olmak için buradayız.
        </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
        <SideNoteV2 style={{ color: "black" }}>başaracaksınız. </SideNoteV2>
     
      </ContentContainer>
    </MainContainer>
  );
};
export default AboutPage;
