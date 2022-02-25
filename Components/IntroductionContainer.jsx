import React from "react";
import styled from "styled-components";
import { ProjectsContainerTitle } from "../utils/CustomComponents";
import Skills from "./Skills";

function IntroductionContainer() {
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
      &:hover{
        filter:none;
        transition:opacity 500ms linear 0s;
      }
    }
  `;

  const SelfAvatar = styled.img`
    width: 30rem;
    height: 35rem;
    display: block;
    padding-bottom: 4rem;
    @media (max-width: 1080px) {
      display: none !important;
    }
    &:hover {
      transform: scale(1.05);
      transition: transform 1.05s ease-in-out;
    }
  `;

  const IntroductionOuterContainer = styled.div`
    background-color: #242424;
    color: #fff;
    height: 60.5rem;
    @media (max-width: 1024px) {
      height: 67rem;
    }
  `;

  const FigureContainer = styled.div`
    content: "";
    inset: 0px;
    z-index: 3;
    background-color: black;
    mix-blend-mode: screen;
    @media (min-width:1024px){
      height:9rem;
    }

  `;
  return (
    <>
      <IntroductionOuterContainer>
        <ProjectsContainerTitle>
          ALLOW ME TO INTRODUCE MYSELF.
        </ProjectsContainerTitle>
        <IntroductionDescription>
          <IntroductionTitle>HELLO</IntroductionTitle>
          <IntroductionParagraph>
            I am Abhay Deshpande, a full-stack developer from India, also a Front
            End Developer Nanodegree Graduate at Udacity (Co-created By Google).
            Working with clients, my dream has always been driven towards
            providing unique experiences to clients also with the best level of quality and
            service to them.
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
