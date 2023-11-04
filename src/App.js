import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* 랜딩 페이지 */}
        <Route path="/survey" element={<Main />} /> {/* 설문 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Landing />
//     </div>
//   );
// }
