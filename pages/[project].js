import React from "react";
import styled from "styled-components";
const ProjectDetails = () => {
  return (
    <Wrapper className="d-flex flex-column align-items-center">
      <div className="container">
        <Header1 className="mb-5">Project Details</Header1>
        <ShortDescription>
          A fully-featured application that describes the details of countries
          all around the globe.
        </ShortDescription>
        <Image
          src={
            require("../public/assets/images/rest-countries_dark.png").default.src
          }
        />
        <Image
          src={
            require("../public/assets/images/rest-countries_dark2.png").default.src
          }
        />
        <div className="d-flex flex-row mb-5">
          <Description>
            It gives an overall view of all the different countries all over the
            globe. The most exciting thing that I worked on here was to reduce
            the API calls and handle all the complex functionality using
            Javascript.
          </Description>
          <ImageContainer>
            <FlexImage
              src={
                require("../public/assets/images/rest-countries_dark.png").default
                  .src
              }
            ></FlexImage>
          </ImageContainer>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 4rem;
  min-height: 100%;
  background: #212529;
  text-align: center;
`;
const Header1 = styled.h1`
  font-size: 70px;
  color: #ffcc66;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 4rem;
`;

const ShortDescription = styled.p`
  font-size: 1.25rem;
  color: rgb(162, 170, 188);
  margin-bottom: 5rem;
`;

const Description = styled.div`
  width: 50%;
  color: white;
  justify-content: left;
  text-align: left;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
`;

const FlexImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit:contain;
`;

const ProjectTitle = styled.h5`
  color:#fff;
`
export default ProjectDetails;
