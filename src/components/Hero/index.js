import React, { useState } from "react";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer style={{ margin: "0" }}>
      <HeroContent>
        <HeroItems>
          <HeroP>The</HeroP>
          <HeroH1>Unstoppable </HeroH1>

          <a href="https://www.eventbrite.com/e/tedxvitap-2021-the-unstoppable-tickets-149289744645">
            <HeroBtn>Register Now</HeroBtn>
          </a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
