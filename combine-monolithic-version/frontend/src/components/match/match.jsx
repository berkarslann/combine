import React from "react";
import { BackButton } from "../../pages/project/styles";
import eros from "../../assets/eros.png";
import { MatchGeneralContainer, MatchInfo, ImgContainer } from "./styles";
import SelectionComponent from "../selection-component/selection.component";
import { RxCrossCircled } from "react-icons/rx";

const MatchScreen = ({ onButtonClick }) => {
  return (
    <MatchGeneralContainer>
      <ImgContainer>
        <img
          src={eros}
          alt="Description of the image"
          style={{
            width: "20%",
            height: "auto",
            marginRight: "auto",
            marginBottom: "auto",
          }}
        />
        <RxCrossCircled
          style={{ color: "purple", width: "6%", height: "6%",cursor: "pointer"  }}  onClick={onButtonClick}
        />

      </ImgContainer>

      <MatchInfo>
        Hangi pozisyonda bulunmak istediğini seç. Pozisyonuna uygun bir proje
        yoksa otomatik bir yere atanacaksın.
      </MatchInfo>
      <SelectionComponent></SelectionComponent>
    </MatchGeneralContainer>
  );
};

export default MatchScreen;
