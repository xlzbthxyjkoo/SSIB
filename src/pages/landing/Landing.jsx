import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Landing.styled";

function Landing() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ButtonImg
        src={`${process.env.PUBLIC_URL}/assets/landing/button.svg`}
        onClick={() => {
          navigate("./survey");
        }}
      ></S.ButtonImg>
    </S.Container>
  );
}

export default Landing;
