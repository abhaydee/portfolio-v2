import React from "react";
import styled from "styled-components";
import {
  ProjectsContainerTitle,
  ProjectsCustomContainer,
} from "../utils/CustomComponents";

function IntroductionContainer() {
  const IntroductionDescription = styled.div`
    padding-left: 8rem;
    padding-bottom: 13.5rem;
    @media (max-width: 1080px) {
      padding-left:1rem;
      padding-right:1rem;
      padding-bottom:4rem;
      justify-content:center;
      text-align:center;
    }
  `;

  const IntroductionTitle = styled.h3`
    font-size: 6.4rem;
    padding-bottom: 2.4rem;
  `;

  const IntroductionParagraph = styled.p`
    display: block;
    font-weight: 300;
    font-size: 2.8rem;
    width: 56rem;
    line-height: 3.5rem;
    @media (max-width:1080px){
      width: 100%;
    }
  `;

  const CustomFigure = styled.figure`
    @media (min-width: 1080px) {
      position: relative;
      height: 64.2rem;
      width: fit-content;
      left: 70rem;
      bottom: 42rem;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 35.5273, 0, 1);
    }
  `;

  const SelfAvatar = styled.img`
    width: 24.375rem;
    height: 36.4375rem;
    display: block;

    @media (max-width: 1080px) {
      display: none !important;
    }
  `;
  return (
    <>
      <ProjectsCustomContainer>
        <ProjectsContainerTitle maxWidth={"70rem"}>
          ALLOW ME TO INTRODUCE MYSELF.
        </ProjectsContainerTitle>
        <IntroductionDescription>
          <IntroductionTitle>HELLO</IntroductionTitle>
          <IntroductionParagraph>
            I am Abhay Deshpande Full-Stack Developer, located in Bangalore,
            India. I work as a Full Stack Eng with companies, agencies and
            individuals.
          </IntroductionParagraph>
        </IntroductionDescription>
        <CustomFigure>
          <SelfAvatar src="./assets/images/avatar.svg" />
        </CustomFigure>
      </ProjectsCustomContainer>
    </>
  );
}

export default IntroductionContainer;
