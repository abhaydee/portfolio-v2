import React from "react";
import styled from "styled-components";
import { ReactLogo } from "styled-icons/boxicons-logos";
import { Nextdotjs } from "styled-icons/simple-icons";

function IconCard(props) {
  const { dropShadowColor, icon, title } = props;
  return (
    <IconContainer>
      <ShadowContainer
        color={dropShadowColor}
      >
        {icon}
      </ShadowContainer>
      <StackTitle>{title}</StackTitle>
    </IconContainer>
  );
}

function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>Skills</SkillsHeader>
      <IconCard
        dropShadowColor="#61dafb"
        icon={<ReactLogo width={80} height={80} />}
        title="React"
      />
      <IconCard
        dropShadowColor="#fafafa"
        icon={
          <Nextdotjs width={80} height={80} />
        }
        title="Next.js"
      />
    </SkillsContainer>
  );
}
const SkillsContainer = styled.div`
  background-color: #242424;
  padding: 2rem;
`;

const SkillsHeader = styled.h1`
  color: #fff;
  text-align: center;
`;
const ShadowContainer = styled.div`
  border-radius: 9999px;
  background-color: gray;
  width:min-content;
  margin-inline: auto;
  background-color: rgba(243,244,246,1);
  filter: ${(props) => `drop-shadow(0 0 0.75rem ${props.color}) !important`};
`;

const CustomReactLogo = styled(ReactLogo)`
  height: 20px;
  width: 20px;
  &:hover {
    transform: scale(1.05);
    transition: transform 1.05s ease-in-out;
  }
`;

const IconContainer = styled.div`
  min-width: min-content;
  padding:1rem;
`;

const StackTitle = styled.p`
  text-align: center;
  padding:0.5rem;
`
export default Skills;
