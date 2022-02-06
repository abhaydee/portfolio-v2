import React from "react";
import styled from "styled-components";

const TechStackContainer = ({ techName, techLogo }) => {
  return (
    <Wrapper>
      <Image src={techLogo} />
      <TechText>
          {techName}
      </TechText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  padding:2rem;
  justify-content:center;
  align-items:center;
  text-align:center;
  background-color: rgb(47, 59, 84);
  color:#d7dce2;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 4rem;
`;

const TechText = styled.p`

`
export default TechStackContainer;
