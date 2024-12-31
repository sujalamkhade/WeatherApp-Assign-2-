import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Weather />} /> {/* Default route */}
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
