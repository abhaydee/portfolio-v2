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
} from "styled-icons/simple-icons";

const IconCard = (props) => {
  const { dropShadowColor, icon, title } = props;
  return (
    <IconContainer>
      <ShadowContainer color={dropShadowColor}>{icon}</ShadowContainer>
      <StackTitle>{title}</StackTitle>
    </IconContainer>
  );
};

const logoStyle = {
  width: "5rem",
  height: "5rem",
};
function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsSubHeader style={{ color: "white" }}>FrontEnd</SkillsSubHeader>
      <FlexContainer>
        <IconCard
          dropShadowColor="#61dafb"
          icon={<CustomReactLogo style={logoStyle} />}
          title="React"
        />
        <IconCard
          dropShadowColor="#61dafb"
          icon={<CustomReactLogo style={logoStyle} />}
          title="Redux"
        />
        <IconCard
          dropShadowColor="#fafafa"
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
          icon={<Web3dotjs width={80} height={80} />}
          title="ThirdWeb"
        />
      </FlexContainer>
      <SkillsSubHeader>Backend</SkillsSubHeader>
      <FlexContainer>
        <IconCard
          dropShadowColor="#72ab63"
          icon={<Nodejs width={80} height={80} />}
          title="Node.js"
        />

        <IconCard
          dropShadowColor="#d64292"
          icon={<Graphql width={80} height={80} />}
          title="GraphQL"
        />
        <IconCard
          dropShadowColor="#ee8610"
          icon={<Aws width={80} height={80} />}
          title="Amazon Web Services"
        />
        <IconCard
          dropShadowColor="#20da0f"
          icon={<Mongodb width={80} height={80} />}
          title="MongoDB"
        />
        <IconCard
          dropShadowColor="#1a9bf1"
          icon={<Amazondynamodb width={80} height={80} />}
          title="DynamoDB"
        />
      </FlexContainer>
    </SkillsContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: center;
`;
const SkillsContainer = styled.div`
  background-color: #242424;
  padding: 2rem;
`;

const SkillsSubHeader = styled.h3`
  margin-top: 1rem;
  text-align: center;
  font-family: "Poppins-Regular";
  color: #fff;
`;

const SkillsHeader = styled.h1`
  color: #fff;
  font-family: "Kicker-Black";
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
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

const CustomReactLogo = styled(ReactLogo)`
  &:hover {
    transform: scale(1.2);
    transition: transform 200ms ease-in-out;
  }
`;

const IconContainer = styled.div`
  min-width: min-content;
  padding: 1rem;
`;

const StackTitle = styled.p`
  text-align: center;
  color: white;
  font-family: "Source-OpenSans";
  padding: 1rem;
`;
export default Skills;
