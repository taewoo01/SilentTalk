import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Nomal from "./pages/Nomal";
import Render from "./pages/Render";
import Feedback from "./pages/feedback";
import "./index.css";  // TailwindCSS 및 애니메이션 적용된 CSS 파일

function SplashScreen() {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFullText(true); // 3초 후 full text를 보여줌
    }, 1500); // 애니메이션 시간이 끝난 후 나타나도록 설정
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-500">
      <h1
        className={`text-7xl font-bold text-white ${showFullText ? 'text-reveal' : 'animate-expand'}`}
      >
        {showFullText ? "SilentTalk" : "ST"}
      </h1>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5초 후에 메인 페이지로 이동
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Nomal" element={<Nomal />} />
          <Route path="/Render" element={<Render />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
