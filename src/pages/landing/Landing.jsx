import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-image: url("./assets/landing/landing.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; //비율 줄이고 싶으면 이거 조절
`;

const Button = styled.div`
  cursor: pointer;
  //   font-size: 18px;
  //   margin-top: 20px;
`;

function Landing() {
  return (
    <Container>
      <Button
        src="./assets/landing/button.svg"
        onClick={() => {
          navigate("./survey");
        }}
      ></Button>
    </Container>
  );
}

export default Landing;
