import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

const navStyle = {
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",

  "&.active": {
    borderBottom: "3px solid #01bf71",
  },
};

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
                <NavLink to="/" exact style={navStyle}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/speakers" exact style={navStyle}>
                  Speakers
                </NavLink>{" "}
              </NavItem>
              <NavItem>
                <NavLink to="/team" exact style={navStyle}>
                  Team
                </NavLink>{" "}
              </NavItem>

              <NavItem>
                <NavLink to="/schedule" exact style={navStyle}>
                  Schedule
                </NavLink>{" "}
              </NavItem>
              <NavItem>
                <NavLink to="/glimpse" exact style={navStyle}>
                  Glimpses of TED<span style={{ color: "red" }}>x</span>VITAP
                </NavLink>{" "}
              </NavItem>
              <NavItem>
                <HashLink to="/#about" style={navStyle}>
                  About Us
                </HashLink>
              </NavItem>
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
