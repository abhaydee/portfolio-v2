import React from 'react'
import styled from "styled-components"
import { ReactLogo } from 'styled-icons/boxicons-logos';


function IconCard(props) {
  const { dropShadowColor, icon, title } = props;
  return (
    <IconContainer>
      <ShadowContainer
        className="rounded-full bg-gray-100 w-min mx-auto"
        color={dropShadowColor}
      >
        {icon}
      </ShadowContainer>
      <p className="text-center mt-2">{title}</p>
    </IconContainer>
  );
}

function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>Skills</SkillsHeader>
      <IconCard
        dropShadowColor="#61dafb"
        icon={
          <ReactLogo width={80} height={80}/>
        }
        title="React"
      />
    </SkillsContainer>
  )
}
const SkillsContainer = styled.div`
   background-color: #242424;
   padding: 2rem;
`;

const SkillsHeader = styled.h1`
  color:#fff;
  text-align: center;
`
const ShadowContainer = styled.div`
  border-radius:9999px;
  background-color: gray;
  margin:0 auto;
  width:112px;
  height:112px;
filter: ${(props) => `drop-shadow(0 0 0.75rem ${props.color}) !important`};
`;

const CustomReactLogo =styled(ReactLogo)`
  height: 20px;
  width:20px;
  &:hover {
      transform: scale(1.05);
      transition: transform 1.05s ease-in-out;
    }
`

const IconContainer = styled.div`
   min-width:min-content;
   width:112px;
   height:144px;
`
export default Skills;