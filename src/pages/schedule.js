import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

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
          <br />
          <br />
          <br />
          <br style={{ fontSize: "7rem" }} />
          <h1 style={{ textAlign: "center" }}>
            Schedule TED<sup style={{ color: "red" }}>X</sup>VITAP
          </h1>
          <br />
          <p style={{ textAlign: "center", fontSize: "1.2em" }}>
            The Time Mentioned Below is in IST (UTC +5:30)
          </p>
          <br style={{ fontSize: "3.5rem" }} />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%", height: "150%", position: "block" }}
              src="https://raw.githubusercontent.com/theathleticnerd/tedxpics/main/1.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GlimpsePage;
