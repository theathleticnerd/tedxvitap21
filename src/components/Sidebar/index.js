import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink href="./#speakers" onClick={toggle}>
            Speaker
          </SidebarLink>
          <SidebarLink href="./#about" onClick={toggle}>
            About Us
          </SidebarLink>
          {/*<SidebarLink href="./team" onClick={toggle}>
            Team
          </SidebarLink>*/}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            target="_blank"
            href="https://www.eventbrite.com/e/tedxvitap-2021-the-unstoppable-tickets-149289744645"
          >
            Register
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
