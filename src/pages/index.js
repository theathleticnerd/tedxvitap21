import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

import CardContainer from "../components/Teams/CardContainer";
import About from "../components/About/about.js";
import Ticket from "../components/Ticket";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Tiles from "../components/Tiles";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero id="home" />
      <Timer id="speakers" />
      <Feature id="about" />
      <Tiles id="sponsors" />

      <Ticket />

      <About />

      <Footer />
    </Router>
  );
}

export default Home;
