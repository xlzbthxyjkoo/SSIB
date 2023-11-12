import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";
import Loading from "./pages/Loading/Loading";
import Result from "./pages/Result/Result";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* 랜딩 페이지 */}
        <Route path="/survey" element={<Main />} /> {/* 설문 페이지 */}
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
