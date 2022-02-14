import React from "react";
import styled from "styled-components";

const TechStackContainer = ({ techName, techLogo }) => {
  return (
    <Wrapper>
      <ImageContainer >
        <Image src={techLogo} />
      </ImageContainer>
      <TechText>{techName}</TechText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  padding:30px 20px;
  width:12.43rem;
  height:9.625rem;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: rgb(47, 59, 84);
  color: #d7dce2;
  @media (max-width:1024px){
      width:6.31rem;
      height:8.18rem;
  }
`;
const Image = styled.img`
  width:70px;
  height:70px;
  object-fit:cover;
  @media (max-width:1024px){
      width:50px;
      height:50px;
  }
`;
const ImageContainer = styled.div`
`;

const TechText = styled.p`
    padding:1rem;
    @media (max-width:1024px){
        padding:0.5rem;
        font-size:0.75rem;
        text-align:center;
    }
`
export default TechStackContainer;