import React, { useState } from "react";
import { GlobalStyle } from "../globalStyles";
import Hero from "../components/Hero";

import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

import About from "../components/About/about.js";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily: "sans-serif", fontSize: "3rem" }}>Schedule</h3>
        <img
          id="schedule"
          className="image1"
          src="https://raw.githubusercontent.com/theathleticnerd/tedxpics/main/1.png"
        />
      </div>
      {/* <Speakers style={{ margin: "0" }} /> */}
      <CardComponent />

      <Feature />

      <About />

      <Footer />
    </>
  );
}

export default Home;
