import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CardContainer from "../components/Teams/CardContainer";
import Team from "../components/Team2";
import { GlobalStyle } from "../globalStyles";

const TeamPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
