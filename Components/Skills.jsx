import React from "react";
import styled from "styled-components";
import { Html5, Nodejs, ReactLogo, Aws } from "styled-icons/boxicons-logos";
import { JsSquare } from "styled-icons/fa-brands";
import { Reactjs } from "styled-icons/remix-fill";
import {
  Csswizardry,
  Nextdotjs,
  Typescript,
  Web3dotjs,
  Graphql,
  Mongodb,
  Amazondynamodb,
  Redux,
} from "styled-icons/simple-icons";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
`;
const SkillsContainer = styled.div`
  background-color: #242424;
  padding: 2rem;
`;

const SkillsSubHeader = styled.h3`
  margin-bottom: ${(props) => props.marginBottom};
  margin-top:  ${(props) => props.marginTop};
  text-align: center;
  font-family: "Poppins-Regular";
  color: #fff;
`;

const SkillsHeader = styled.h1`
  color: #fff;
  font-family: "Kicker-Black";
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
`;
const ShadowContainer = styled.div`
  border-radius: 9999px;
  background-color: gray;
  width: min-content;
  padding: 1rem;
  margin-inline: auto;
  background-color: rgba(243, 244, 246, 1);
  filter: ${(props) => `drop-shadow(0 0 0.75rem ${props.color}) !important`};
`;

const IconContainer = styled.div`
  min-width: min-content;
  padding: 0.5rem;
  margin-inline: 1.5rem;
  &:hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
    color: ${(props) => props.hoverColor};
  }
`;

const StackTitle = styled.p`
  text-align: center;
  color: white;
  font-family: "Source-OpenSans";
  padding: 1rem;
`;

const IconCard = (props) => {
  const { dropShadowColor, icon, title } = props;
  return (
    <IconContainer hoverColor={dropShadowColor}>
      <ShadowContainer color={dropShadowColor}>{icon}</ShadowContainer>
      <StackTitle>{title}</StackTitle>
    </IconContainer>
  );
};

const logoStyle = {
  width: "4rem",
  height: "4rem",
};

function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsSubHeader marginBottom={"1rem"}>FrontEnd</SkillsSubHeader>
      <FlexContainer>
        <IconCard
          dropShadowColor="#61dafb"
          icon={<Reactjs style={logoStyle} />}
          title="React"
        />
        <IconCard
          dropShadowColor="#61dafb"
          icon={<Redux style={logoStyle} />}
          title="Redux"
        />
        <IconCard
          dropShadowColor="#20da0f"
          icon={<Nextdotjs style={logoStyle} />}
          title="Next.js"
        />
        <IconCard
          dropShadowColor="#efd819"
          icon={<JsSquare style={logoStyle} />}
          title="JavaScript"
        />
        <IconCard
          dropShadowColor="#ea6328"
          icon={<Html5 style={logoStyle} />}
          title="HTML"
        />
        <IconCard
          dropShadowColor="#2763e9"
          icon={<Csswizardry style={logoStyle} />}
          title="CSS"
        />
        <IconCard
          dropShadowColor="#61dafb"
          icon={<Reactjs style={logoStyle} />}
          title="React Native"
        />
        <IconCard
          dropShadowColor="#3074bf"
          icon={<Typescript style={logoStyle} />}
          title="Typescript"
        />
        <IconCard
          dropShadowColor="#d64292"
          icon={<Graphql style={logoStyle} />}
          title="GraphQL"
        />
        <IconCard
          dropShadowColor="#bf3054"
          icon={<Web3dotjs style={logoStyle} />}
          title="ThirdWeb"
        />
      </FlexContainer>
      <SkillsSubHeader marginBottom={"1rem"} marginTop={"2rem"}>Backend</SkillsSubHeader>
      <FlexContainer>
        <IconCard
          dropShadowColor="#72ab63"
          icon={<Nodejs style={logoStyle} />}
          title="Node.js"
        />

        <IconCard
          dropShadowColor="#d64292"
          icon={<Graphql style={logoStyle} />}
          title="GraphQL"
        />
        <IconCard
          dropShadowColor="#ee8610"
          icon={<Aws style={logoStyle} />}
          title="Amazon Web Services"
        />
        <IconCard
          dropShadowColor="#20da0f"
          icon={<Mongodb style={logoStyle} />}
          title="MongoDB"
        />
        <IconCard
          dropShadowColor="#1a9bf1"
          icon={<Amazondynamodb style={logoStyle} />}
          title="DynamoDB"
        />
      </FlexContainer>
    </SkillsContainer>
  );
}

export default Skills;
