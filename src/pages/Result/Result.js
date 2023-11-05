/*eslint-disable */ //warning안뜨게 해줌
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Result.css';

import mainMenuBox from "../../assets/result/mainMenuBox.svg";
import sideMenuBox from "../../assets/result/sideMenuBox.svg";
import reTestBtn from "../../assets/result/reTestBtn.svg";
import salmon from "../../assets/result/allFoods/salmon.svg";
import takoyakki from "../../assets/result/allFoods/takoyakki.svg";
import kimbap from "../../assets/result/allFoods/kimbap.svg";

const allFoods = [
    [salmon, "연어스테이크"],
    [takoyakki, "타코야끼"],
    [kimbap, "김밥"],
]

function Result(){

    return(
        <div className="Result">
            <div>
                <h1>오늘의 음식 완성</h1>
            </div>

            <div className="mainMenu">
                <img src={mainMenuBox} className="mainMenuBox"/>
                <img src={allFoods[0][0]} className="resultFood"/>
                <div className="foodNameBox">
                    <span className="foodName">{allFoods[0][1]}</span>
                </div>
            </div>

            <div className="menu">
                <div className="sideMenu">
                    <img src={sideMenuBox} className="sideMenuBox"/>
                    <h2>&lt;찰떡궁합&gt;</h2>

                    <img src={allFoods[1][0]} className="sideMenuImg"/>
                    <span className="menuName">{allFoods[1][1]}</span>
                </div>

                <div className="similarMenu">
                    <img src={sideMenuBox} className="sideMenuBox"/>
                    <h2>&lt;비슷한 음식&gt;</h2>

                    <img src={allFoods[2][0]} className="sideMenuImg"/>
                    <span className="menuName">{allFoods[2][1]}</span>                    
                </div>
            </div>

            {/* landing페이지로 연결됨 */}
            <Link to="/">
                <div className="reTest">
                    <img src={reTestBtn} className="reTestBtn"/>
                    <h3>테스트 다시하기</h3>
                </div>
            </Link>

        </div>
    );
}

export default Result;