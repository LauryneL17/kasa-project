// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logement from "./pages/Logement";
import Home from "./pages/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Error from "./pages/Error";
import Error404 from "./component/Error404";
import Footer from "./component/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/About" element={<About />} />
        <Route path="/404" element={<Error />} /> {/* Route for 404 page */}
        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
