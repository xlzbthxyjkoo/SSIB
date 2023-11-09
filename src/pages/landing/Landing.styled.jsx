import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(
    656px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  );
  position: relative;
  overflow-x: hidden;
  background-image: url(${process.env.PUBLIC_URL}/assets/landing/SSIB.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: auto;
  height: 200px;
  margin-top: 95px;
`;

export const Button = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 19px;
  color: #4f2789;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: 240px; // 버튼 이미지의 너비 조절
  height: 60px; // 높이를 자동으로 조절하여 비율 유지
  border: 1px solid #4f2789;
  border-radius: 20px;
  margin-top: 230px;
  background-color: #fff;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #4f2789;
      color: #fff;
    }
  }

  //모바일에서 버튼 터치 시 색상 변경
  &:active {
    background-color: #4f2789;
    color: #fff;
  }
`;
