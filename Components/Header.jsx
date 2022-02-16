import React from "react";
import { Header3, HeaderContainer } from "../utils/CustomComponents";
function Header() {
  return (
    <HeaderContainer>
      <Header3 href="#">ABHAY DESHPANDE</Header3>
      <Header3 href="#projects">PROJECTS</Header3>
      <Header3> IN REGARDS TO</Header3>
      <Header3>CONTACT</Header3>
      <Header3>RESUME</Header3>
    </HeaderContainer>
  );
}

export default Header;
