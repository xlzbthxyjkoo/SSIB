/*eslint-disable */ //warning안뜨게 해줌
import { Link } from "react-router-dom";
import "./Result.css";
import salmon from "../../assets/result/allFoods/salmon.svg";
import takoyakki from "../../assets/result/allFoods/takoyakki.svg";
import kimbap from "../../assets/result/allFoods/kimbap.svg";
import axios from "axios";
import React, { useState, useEffect } from "react";

let getResult = "https://easymiracle.pythonanywhere.com/menus/foods?id=1";

const allFoods = [
  [salmon, "연어스테이크"],
  [takoyakki, "타코야끼"],
  [kimbap, "김밥"],
];

function Result() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://easymiracle.pythonanywhere.com/menus/foods?id=1")
      .then((response) => {
        alert("수신 성공");
        setPosts(response.data);
      })
      .catch((error) => {
        alert("수신에 실패");
        console.error(error);
      });
  }, []);

  return (
    <div className="Result">
      <div>
        <div>{posts.length}</div>
        <h1>오늘의 음식 완성</h1>
      </div>

      {/* 상단 메뉴 box */}
      <div className="mainMenu">
        <div className="resultFoodBox">
          <img src={allFoods[0][0]} className="resultFood" />
        </div>
        <div className="foodNameBox">
          <span className="foodName">{allFoods[0][1]}</span>
        </div>
      </div>

      {/* 하단 메뉴 box */}
      <div className="menu">
        {/* 하단 왼쪽 메뉴 box */}
        <div className="sideMenu">
          <h2>&lt;찰떡궁합&gt;</h2>
          <img src={allFoods[1][0]} className="sideMenuImg" />
          <span className="menuName">{allFoods[1][1]}</span>
        </div>

        {/* 하단 오른쪽 메뉴 box */}
        <div className="similarMenu">
          <h2>&lt;비슷한 음식&gt;</h2>
          <img src={allFoods[2][0]} className="sideMenuImg" />
          <span className="menuName">{allFoods[2][1]}</span>
        </div>
      </div>

      {/* landing페이지로 연결됨 */}
      <div className="reTest">
        <Link to="/" className="linkStyle">
          <h3>테스트 다시하기</h3>
        </Link>
      </div>
    </div>
  );
}

export default Result;
