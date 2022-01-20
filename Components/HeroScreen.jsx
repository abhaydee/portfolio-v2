import React from "react";
import Header from "./Header";
import { HeroScreenContainer } from "../utils/CustomComponents";
import styled from "styled-components";
function HeroScreen() {
  const HeroScreenTitle = styled.div`
    font-size: 8.8rem;
    font-weight: 600;
    // position: absolute;
    // top: 50%;
    margin-top:15rem;
    transform: translateY(-50%);
    text-align: center;
    color: #242424;
  `;

  const HeroScreenSubTitle=styled.p`
        text-align:center;
        font-size:3rem;
        color:#019872;
  `;
  return (
    <HeroScreenContainer>
      <Header />
      <HeroScreenTitle>Full Stack Developer</HeroScreenTitle>
      <HeroScreenSubTitle>FREELANCE</HeroScreenSubTitle>
    </HeroScreenContainer>
  );
}

export default HeroScreen;
