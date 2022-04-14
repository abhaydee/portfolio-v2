import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TechStackContainer from "../Components/TechStackContainer";
import { ExternalLink } from "styled-icons/feather";
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
  margin-top: 1rem;
  &:hover {
    transform: scale(1.05);
    transition: transform 1.05s ease-in-out;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  color: rgb(162, 170, 188);
  margin-bottom: 2rem;
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

const Header3 = styled.a`
  color: #ffcc66;
  margin-bottom: 2rem;
  font-family: "Source-OpenSans";
  font-size: 2rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #ffcc66;
  }
`;

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState({});
  useEffect(() => {
    var projectDetails = JSON.parse(localStorage.getItem("Project-Details"));
    setProjectData(projectDetails);
  }, []);

  return (
    <Wrapper className="d-flex flex-column align-items-center">
      {Object.keys(projectData).length > 0 && (
        <div className="container">
          <Header1 className="mb-5">{projectData.projectTitle}</Header1>
          <ProjectDescription>
            {projectData.projectDescription}
          </ProjectDescription>
          <Header3
            href={projectData.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to view the live project{" "}
            <ExternalLink width={25} height={25} />
          </Header3>
          <Anchor
            href={projectData.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={projectData.projectImage} alt="project-image-1" />
          </Anchor>

          <Anchor
            href={projectData.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={projectData.projectImage2} alt="project-image-2" />
          </Anchor>
          <ShortDescription>
            {projectData.projectShortDescription}
          </ShortDescription>

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

export default ProjectDetails;
