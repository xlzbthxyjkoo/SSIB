import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Landing.styled";

function Landing() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Logo
        src={`${process.env.PUBLIC_URL}/assets/landing/Logo.svg`}
      ></S.Logo>
      <S.Button
        onClick={() => {
          navigate("./survey");
        }}
      >
        <p>테스트 시작하기</p>
      </S.Button>
    </S.Container>
  );
}

export default Landing;
