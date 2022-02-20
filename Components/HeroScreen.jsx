import React from "react";
import Header from "./Header";
import { HeroScreenContainer } from "../utils/CustomComponents";
import styled from "styled-components";
function HeroScreen() {
  const HeroScreenTitle = styled.div`
    font-family: "Kicker-Black";
    text-transform:uppercase;
    font-size: 8rem;
    font-weight: bold;
    margin-top: 15rem;
    transform: translateY(-50%);
    text-align: center;
    color: #242424;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
  `;

  const HeroScreenSubTitle = styled.p`
    text-align: center;
    font-family: "Kicker-Black";
    font-weight:bold;
    font-size: 3rem;
    letter-spacing:0.75rem;
    color: #019872;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
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
