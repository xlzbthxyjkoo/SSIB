import * as S from "./Main.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../common/api/questionsApi.json"; //json에 입력해놓은 질문,답변 불러오기
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const [num, setNum] = useState(0); // 페이지 번호 (질문)
  const [activeIndex, setActiveIndex] = useState(null); //답변 번호

  // 이미지 프리로딩을 위한 배열
  const imageUrls = questions.map((question) => question.img);

  // 이미지 프리로딩 함수
  const preloadImages = (urls) => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    // 페이지 로드 시 이미지 프리로딩
    preloadImages(imageUrls);
  }, [imageUrls]);

  const handleAnswerClick = (index) => {
    if (num < 9) {
      setActiveIndex(index);
      setNum(num + 1); //질문 클릭하면 num에 1씩 더하며 페이지 넘겨주기

      if (num === 8) {
        // num이 8이면 로딩 페이지로 이동
        navigate("/loading");
      }

      // 사용자가 클릭한 답변 서버로 전송
      sendUserClickToServer(index);
    }
  };

  const sendUserClickToServer = async (index) => {
    try {
      const url = "";

      const data = {
        responses: index,
      };

      const response = await axios.post(url, data);

      console.log("성공", response.data);
    } catch (error) {
      console.error("실패", error);
    }
  };

  return (
    <S.Container>
      <S.Number>
        <p>Q.0{questions[num]?.id || 1}</p>
      </S.Number>
      <S.Question>
        <p>{questions[num]?.question || ""}</p>
      </S.Question>
      <S.QImg
        src={questions[num]?.img || ""}
        style={S.imageStyles[questions[num]?.id || 1]}
      ></S.QImg>
      <S.QContainer>
        {questions[num]?.answers.map((answer) => (
          <S.Answer
            key={answer.type}
            active={activeIndex === answer.type}
            onClick={() => handleAnswerClick(answer.type)}
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
