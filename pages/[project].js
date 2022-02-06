import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TechStackContainer from "../Components/TechStackContainer";
const ProjectDetails = () => {
  const [projectData, setProjectData] = useState({});
  useEffect(() => {
    var projectDetails = JSON.parse(localStorage.getItem("Project-Details"));
    setProjectData(projectDetails);
  }, []);

  console.log("the project data", projectData);
  return (
    <Wrapper className="d-flex flex-column align-items-center">
      {Object.keys(projectData).length > 0 && (
        <div className="container">
          <Header1 className="mb-5">{projectData.projectTitle}</Header1>
          <ShortDescription>{projectData.projectDescription}</ShortDescription>
          <Image src={projectData.projectImage} />
          <Image src={projectData.projectImage} />
          {/* <DetailsContainer className="flex-md-row flex-lg-row  flex-sm-column">
            <Description>
              It gives an overall view of all the different countries all over
              the globe. The most exciting thing that I worked on here was to
              reduce the API calls and handle all the complex functionality
              using Javascript.
            </Description>
            <ImageContainer>
              <FlexImage
                src={"/assets/images/rest-countries_dark2.png"}
              ></FlexImage>
            </ImageContainer>
          </DetailsContainer> */}
          <CustomContainer>
            {projectData.techStack.map((projectItem, projectItemIndex) => {
              return (
                <TechStackGrid key={projectItemIndex}>
                  <TechStackContainer
                    techName={"NextJS"}
                    techLogo="/assets/images/nextjs-logo.png"
                  />
                </TechStackGrid>
              );
            })}
          </CustomContainer>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 4rem;
  min-height: 100%;
  background: linear-gradient(rgb(47, 59, 84), rgb(23, 28, 40));
  text-align: center;
`;
const Header1 = styled.h1`
  font-size: 70px;
  color: #ffcc66;
  @media (max-width:1024px){
    font-size:36px;
  }
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
  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const Description = styled.div`
  width: 50%;
  color: white;
  justify-content: left;
  text-align: left;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
`;

const FlexImage = styled.img`
  width: 23rem;
  height: auto;
  margin-top: 2rem;
  height: 100%;
  object-fit: contain;
`;

const ProjectTitle = styled.h5`
  color: #fff;
`;

const DetailsContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TechStackGrid = styled.div`
  display:flex;
  margin-right:1rem;
  margin-bottom:1rem;
  @media (max-width:1024px){
    margin-right:0.6rem;
  }
  justify-content:center;
`

const CustomContainer = styled.div`
  display:flex;
  padding-inline:6rem;
  @media (max-width:1024px){
    padding-inline:0.1rem;
    margin-left:1rem;
    flex-direction:row;
    max-width:100%;
    flex-wrap:wrap;
  }
`
export default ProjectDetails;
