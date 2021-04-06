import React, { useState } from "react";
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
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Timer style={{ margin: "0" }} />
      <img
        className="image1"
        style={{ margin: "0 100px" }}
        src="https://raw.githubusercontent.com/theathleticnerd/tedxpics/main/1.png"
      />
      {/* <Speakers style={{ margin: "0" }} /> */}
      <CardComponent />

      <Feature />

      <About />

      <Footer />
    </>
  );
}

export default Home;
