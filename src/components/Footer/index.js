import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              TED<sup style={{ color: "red" }}>X</sup>VITAP
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
