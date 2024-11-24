import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </BrowserRouter>
    </React.Fragment>
  );
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
