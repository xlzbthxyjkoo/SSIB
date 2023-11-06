import * as S from "./Main.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../common/api/questionsApi.json"; //json에 입력해놓은 질문,답변 불러오기

function Main() {
  const navigate = useNavigate();
  const [num, setNum] = useState(0); // 페이지 번호 (질문)
  const [activeIndex, setActiveIndex] = useState(null); //답변 번호
  const [selectedAnswers, setSelectedAnswers] = useState([]); //사용자가 선택한 답변의 index를 배열로 저장

  const handleAnswerClick = (index) => {
    if (num < 9) {
      setActiveIndex(index);
      setNum(num + 1); //질문 클릭하면 num에 1씩 더하며 페이지 넘겨주기
      setSelectedAnswers([...selectedAnswers, index]);

      if (num === 8) {
        // num이 8이면 로딩 페이지로 이동
        navigate("/loading");
      }
    }
    console.log("Selected Answers:", [...selectedAnswers, index]); //배열이 잘 저장되고 있는지 확인
  };

  return (
    <S.Container>
      <S.Number>
        <p>Q.0{questions[num]?.id || 1}</p>
      </S.Number>
      <S.Question>
        <p>{questions[num]?.question || ""}</p>
      </S.Question>
      <S.QImg src={questions[num]?.img || ""}></S.QImg>
      <S.QContainer>
        {questions[num]?.answers.map((answer, index) => (
          <S.Answer
            key={index}
            active={activeIndex === index}
            onClick={() => handleAnswerClick(index)}
          >
            <p>{answer.content}</p>
          </S.Answer>
        ))}
      </S.QContainer>
      <S.Progress src={questions[num]?.progress || ""}></S.Progress>
    </S.Container>
  );
}

export default Main;
