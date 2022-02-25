import Image from "next/image";
import React from "react";
import { Header3, HeaderContainer } from "../utils/CustomComponents";

function Header() {
  const navigateToResume = () => {
    window.open("https://nonchalant-trouble-13d.notion.site/Abhay-G-Deshpande-c47fee9ba740423a9bcc62274b1cdd56","_blank")
  };
  return (
    <>
      <HeaderContainer>
        <Header3 href="#">ABHAY DESHPANDE</Header3>
        <Header3 href="#projects">PROJECTS</Header3>
        <Header3 href="#contact">CONTACT</Header3>
        <Header3 onClick={navigateToResume}>RESUME</Header3>
      </HeaderContainer>
    </>
  );
}

export default Header;
