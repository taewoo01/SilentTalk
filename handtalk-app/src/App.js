import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Nomal from "./pages/Nomal";
import Render from "./pages/Render";
import Feedback from "./pages/feedback";
import Bottom from "./pages/Bottom";
import "./index.css";  // TailwindCSS 및 애니메이션 적용된 CSS 파일

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <div className="min-h-screen flex flex-col">
          <Nav />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Nomal" element={<Nomal />} />
              <Route path="/Render" element={<Render />} />
              <Route path="/Feedback" element={<Feedback />} />
            </Routes>
          </div>
          <Bottom />
        </div>
      )}
    </Router>
  );
}


export default App;
