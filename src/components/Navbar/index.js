import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../../images/tedlogo.jpg";
import Ria from "../../images/Ria.jpg";
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
  SocialIconLink,
} from "./NavbarElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <a href="/" style={{ marginTop: "25px" }}>
              {" "}
              <img
                style={{
                  width: "200px",
                  height: "50px",

                  margin: "0px",
                }}
                src={logo}
              />
            </a>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks href="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="./#speakers">Speakers</NavLinks>{" "}
              </NavItem>
              {/* <NavLinks><NavLink to ="/speakers">Speakers</NavLink></NavLinks> </NavItem> */}
              <NavItem>
                <NavLinks href="./#about">About Us</NavLinks>
              </NavItem>
              {/*<NavItem>
                <NavLinks href="/team">Team</NavLinks>
              </NavItem>*/}
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                target="_blank"
                href="https://www.eventbrite.com/e/tedxvitap-2021-the-unstoppable-tickets-149289744645"
              >
                Register
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
