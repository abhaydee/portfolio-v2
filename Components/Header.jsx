import Image from "next/image";
import React from "react";
import { Header3, HeaderContainer } from "../utils/CustomComponents";

function Header() {
  return (
    <>
      <HeaderContainer>
        <Header3 href="#">ABHAY DESHPANDE</Header3>
        <Header3 href="#projects">PROJECTS</Header3>
        <Header3 href="#contact">CONTACT</Header3>
        <Header3
          href={"/abhay-deshpande_resume.html"}
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </Header3>
      </HeaderContainer>
    </>
  );
}

export default Header;
