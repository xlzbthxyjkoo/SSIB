import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
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

const Number = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #4f2789;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const Question = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 17px;
  color: #4f2789;
  display: flex;
  justify-content: center;
`;

const QImg = styled.img`
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: 280px;
  height: auto;
  margin-top: 30px;
`;

const QContainer = styled.div`
  font-family: "SUIT Variable", sans-serif;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Answer = styled.div`
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

const Progress = styled.img`
  max-width: 100%; // 이미지 크기를 부모 요소에 맞게 조절
  width: 270px;
  height: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

function Main() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAnswerClick = (index) => {
    setActiveIndex(index);
  };

  const answers = ["좋았어!", "오늘은 평범한 하루였어", "힘들었어"];

  return (
    <Container>
      <Number>
        <p>Q.01</p>
      </Number>
      <Question>
        <p>오늘 하루는 어땠어?</p>
      </Question>
      <QImg src={`${process.env.PUBLIC_URL}/assets/main/q1.svg`}></QImg>
      <QContainer>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            active={activeIndex === index}
            onClick={() => handleAnswerClick(index)}
          >
            <p>{answer}</p>
          </Answer>
        ))}
      </QContainer>
      <Progress src={`${process.env.PUBLIC_URL}/assets/bar/1.svg`}></Progress>
    </Container>
  );
}

export default Main;
