import React from "react";
import styled from "styled-components";
import { ProjectsContainerTitle } from "../utils/CustomComponents";
import Skills from "./Skills";

const IntroductionDescription = styled.div`
  padding-left: 5.5rem;
  @media (max-width: 1080px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 4rem;
    justify-content: center;
    text-align: center;
  }
`;

const IntroductionTitle = styled.h3`
  font-size: 4rem;
  padding-bottom: 2.4rem;
  font-family: "Kicker-Black";
  @media (max-width: 1024px) {
    text-align: left;
  }
`;

const IntroductionParagraph = styled.p`
  font-weight: 300;
  font-size: 2rem;
  width: 40rem;
  line-height: 3rem;
  font-family: "Source-OpenSans";
  @media (max-width: 1080px) {
    width: 100%;
    font-size: 1.5rem;
    text-align: left;
    justify-content: center;
  }
`;

const CustomFigure = styled.figure`
  @media (min-width: 1080px) {
    position: relative;
    width: fit-content;
    left: 60%;
    bottom: 34rem;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 35.5273, 0, 1);
    border-radius: 1rem;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    &:hover {
      filter: none;
      transition: opacity 500ms linear 0s;
    }
  }
`;

const SelfAvatar = styled.img`
  width: 30rem;
  height: 35rem;
  display: block;
  padding-bottom: 4rem;
  @media (max-width: 1080px) {
    width: 90%;
    height: 100%;
    margin-inline: 1rem;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 1.05s ease-in-out;
  }
`;

const IntroductionOuterContainer = styled.div`
  background-color: #242424;
  color: #fff;
  height: 45rem;
  @media (max-width: 1024px) {
    height: 65rem;
  }
`;

const FigureContainer = styled.div`
  content: "";
  inset: 0px;
  z-index: 3;
  background-color: black;
  mix-blend-mode: screen;
  @media (min-width: 1024px) {
    height: 9rem;
  }
`;

function IntroductionContainer() {
  return (
    <>
      <IntroductionOuterContainer>
        <ProjectsContainerTitle>
          ALLOW ME TO INTRODUCE MYSELF.
        </ProjectsContainerTitle>
        <IntroductionDescription>
          <IntroductionTitle>HELLO</IntroductionTitle>
          <IntroductionParagraph>
            I am Abhay Deshpande,a full-stack Developer from Boston, USA. With a
            love for Front-End, and bridging the gap between web2 and web3. Keep
            scrolling to learn about the fun projects I’ve worked on.
          </IntroductionParagraph>
        </IntroductionDescription>
        <FigureContainer>
          <CustomFigure>
            <SelfAvatar
              src="./assets/images/square-profile-2.jpeg"
              alt="avatar image"
            />
          </CustomFigure>
        </FigureContainer>
      </IntroductionOuterContainer>
    </>
  );
}

export default IntroductionContainer;
