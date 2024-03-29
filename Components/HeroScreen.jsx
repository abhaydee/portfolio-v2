import React from "react";
import Header from "./Header";
import { HeroScreenContainer, Header3 } from "../utils/CustomComponents";
import styled from "styled-components";
import LoadingArrow from "./LoadingArrow";
const HeroScreenTitle = styled.div`
  font-family: "Kicker-Black";
  text-transform: uppercase;
  font-size: 6rem;
  line-height: 3rem;
  font-weight: bold;
  margin-top: 15rem;
  transform: translateY(-50%);
  text-align: center;
  color: #242424;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1600px) {
    font-size: 8rem;
  }
`;

const HeroScreenSubTitle = styled.p`
  text-align: center;
  font-family: "Kicker-Black";
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 0.75rem;
  margin-top: 3rem;
  color: #019872;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 15rem;
  width: 80px;
  height: 80px;
`;
function HeroScreen() {
  return (
    <HeroScreenContainer>
      <Header />
      <HeroScreenTitle>Full Stack Developer</HeroScreenTitle>
      {/* <LoadingArrow /> */}

      <Header3 href="#Organization">
        <Image src="/assets/images/down-arrow.gif" />
      </Header3>
    </HeroScreenContainer>
  );
}

export default HeroScreen;
