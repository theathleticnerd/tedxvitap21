import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Tiles from "../components/Tiles";
import { GlobalStyle } from "../globalStyles";

const GlimpsePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div>
        <div>
          <br style={{ fontSize: "100px" }} />
          <h1 style={{ textAlign: "center" }}>
            Glimpses of TED<sup style={{ color: "red" }}>X</sup>VITAP
          </h1>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%", height: "150%" }}
              src="https://raw.githubusercontent.com/theathleticnerd/tedxglimpse/main/collage.jpg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GlimpsePage;
