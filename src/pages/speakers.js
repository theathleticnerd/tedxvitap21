import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CardContainer from "../components/Teams/CardContainer";
import { GlobalStyle } from "../globalStyles";

const SpeakerPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div style={{ position: "absolute" }}>
        <CardContainer style={{ height: "1000px" }} />
      </div>
      <Footer />
    </div>
  );
};

export default SpeakerPage;
