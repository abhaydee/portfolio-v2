import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { Header3, HeaderContainer } from "../utils/CustomComponents";
import ComponentReSize from "../utils/resolutionHook";

const AnchorContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Made-OutSans-Bold";
  color: white;
  margin-left: 5.25rem;
  margin-top: 4rem;
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }
`;

const MobileNavContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #393d47;
  z-index: 100;
  animation: fadeInRight 0.5s ease-in-out;
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #393d47;
    overflow-x: hidden;
    transition: 0.5s;
    /* padding-top: 20px;
    padding-left: 20px; */
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translatey(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const CloseImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin-top: 2rem;
  margin-left: 80%;
`;

const LinkIcon = styled.img`
  width: 1.5625rem;
  height: 1.7725rem;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const HeaderMobile = styled.a`
  padding: 1rem;
  font-size: 1.75rem;
  text-decoration: none;
  color: white;
  font-family: "ClashDisplay-Bold";
  @media (min-width: 48rem) {
    font-size: 0.875rem;
  }
`;
function Header() {
  const isMobile = ComponentReSize();
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <HeaderContainer>
        <Header3 href="#">ABHAY DESHPANDE</Header3>
        {!isMobile &&
          <>
            <Header3 href="#projects">PROJECTS</Header3>
            <Header3 href="#contact">CONTACT</Header3>
            <Header3
              href={"/assets/Abhay_G_Deshpande_Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME
            </Header3>
          </>
        }
        {isMobile && (
          <LinkIcon src="/assets/images/menu.png" onClick={handleNavToggle} />
        )}
      </HeaderContainer>

      {isMobile && navToggle && (
        <MobileNavContainer className="sidenav">
          <CloseImage
            src="/assets/images/close-button.png"
            onClick={handleNavToggle}
            alt="close-icon"
          />
          <div className="flex-column">
            <AnchorContainer>
              <HeaderMobile href="#projects">PROJECTS</HeaderMobile>
              <HeaderMobile href="#contact">CONTACT</HeaderMobile>
              <HeaderMobile
                href={"/assets/Abhay_G_Deshpande_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </HeaderMobile>
            </AnchorContainer>
          </div>
        </MobileNavContainer>
      )}
    </>
  );
}

export default Header;
