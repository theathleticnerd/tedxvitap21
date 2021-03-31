import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo>
              <a href="/" style={{ textDecoration: "none", color: "#fff" }}>
                TED<sup style={{ color: "red" }}>X</sup>VITAP
              </a>
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks href="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks  href="./speakers">Speakers</NavLinks> </NavItem>
                {/* <NavLinks><NavLink to ="/speakers">Speakers</NavLink></NavLinks> </NavItem> */}
              <NavItem>
                <NavLinks href="./#about">About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#sponsors">Sponsors</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink href="/">Tickets</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
