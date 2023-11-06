import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(
    656px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  );
  position: relative;
  overflow-x: hidden;
  //   height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Number = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #4f2789;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Question = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 17px;
  color: #4f2789;
  display: flex;
  justify-content: center;
`;

export const QImg = styled.img`
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: 280px;
  height: auto;
  margin-top: 30px;
`;

export const QContainer = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 57px;
  border: 1.3px solid #4f2789;
  border-radius: 150px;
  margin-top: 10px;

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; //변경 효과를 부드럽게 만듦
  // 마우스를 올렸을 때 스타일 변경
  &:hover {
    background-color: #4f2789;
    color: #fff;
  }
`;

export const Progress = styled.img`
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: 270px;
  height: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;
