import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { GlobalStyle } from "../globalStyles";
import TeamsContainer from "../components/TeamsPage/TeamsContainer";

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

      <TeamsContainer />
      <Footer />
    </div>
  );
};

export default TeamPage;
