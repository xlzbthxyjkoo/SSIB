import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(
    656px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  );
  position: relative;
  overflow-x: hidden;
  background-image: url(${process.env.PUBLIC_URL}/assets/landing/landing.svg);
  background-size: contain;
  background-position: center center; // 가로 및 세로 중앙에 배치
  background-repeat: no-repeat;
  // height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ButtonImg = styled.img`
  cursor: pointer;
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: 240px; // 버튼 이미지의 너비 조절
  height: auto; // 높이를 자동으로 조절하여 비율 유지
  margin-top: 465px;
`;
