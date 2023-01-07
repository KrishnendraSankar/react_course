import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Textform from "./pages/Textform";

function App() {
  const [color, setColor] = useState("#FF0000");
  const [mode, setMode] = useState("light");
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home text="This is Home Page of React Course Demo App" c={color} setColor={setColor} />} />
          <Route path="/about" element={<About />} />
          <Route path="/textform" element={<Textform mode="Dark" heading="Text Form Application" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
