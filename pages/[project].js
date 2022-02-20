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
          <ProjectDescription>{projectData.projectDescription}</ProjectDescription>
          <Anchor href={projectData.externalLink} target="_blank">
            <Image src={projectData.projectImage} />
          </Anchor>

          <Anchor href={projectData.externalLink} target="_blank">
            <Image src={projectData.projectImage2} />
          </Anchor>
          <ShortDescription>{projectData.projectShortDescription}</ShortDescription>
        
          <TechStackTitle>Tech Stack</TechStackTitle>
          <CustomContainer>
            {projectData.techStack.map((projectItem, projectItemIndex) => {
              return (
                <TechStackGrid key={projectItemIndex}>
                  <TechStackContainer
                    techName={projectItem.tech}
                    techLogo={projectItem.logoUrl}
                    projectLink={projectItem.externalLink}
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
  font-family: "Kicker-Black";
  color: #ffcc66;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 4rem;
  border-radius: 1rem;
  &:hover {
    transform: scale(1.05);
    transition: transform 1.05s ease-in-out;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  color: rgb(162, 170, 188);
  margin-bottom: 5rem;
  font-family: "Source-OpenSans";
  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const ShortDescription = styled.p`
  font-size: 1.25rem;
  color: rgb(162, 170, 188);
  margin-bottom: 5rem;
  font-family: "Source-OpenSans";
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
  display: flex;
  margin-right: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    margin-right: 0.6rem;
  }
  justify-content: center;
  align-items: center;
  align-self: center;
  flex: 1;
`;

const CustomContainer = styled.div`
  display: flex;
  padding-inline: 6rem;
  @media (max-width: 1024px) {
    padding-inline: 0.1rem;
    margin-left: 1rem;
    flex-direction: row;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const TechStackTitle = styled.h2`
  color: #ffcc66;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Anchor = styled.a`
  cursor: pointer;
`;
export default ProjectDetails;
