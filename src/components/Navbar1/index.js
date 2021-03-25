import React from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          TED<sup style={{ color: "red" }}>X</sup>VITAP
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <FaBars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
