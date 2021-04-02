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
import Team from "../components/Team2";

import CardComponent from "../components/Teams/CardContainer";

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
      <Hero />
      <Timer style={{ margin: "0" }} />

      {/* <Speakers style={{ margin: "0" }} /> */}
      <CardComponent />

      <Feature />

      <About />

      <Footer />
    </Router>
  );
}

export default Home;
