import React from "react";
import {
  ProjectsCustomContainer,
  ProjectImage,
  CustomContainer,
  FigureContainer,
  CustomImage,
} from "../utils/CustomComponents";
import styled from "styled-components";
import Image from "next/image";
function ProjectsContainer() {
  const ProjectsContainerTitle = styled.h1`
    padding: 3rem 1rem 2rem 1rem;
    @media (min-width: 768px) {
      max-width: 70rem;
      padding: 4rem 0 4rem 4rem;
      font-size: 3.77rem;
      max-width: 41.875rem;
    }
  `;
  const ProjectsDescriptionContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `;

  const Project = styled.div`
    position: relative;
    margin-bottom: 5rem;
  `;
  return (
    <ProjectsCustomContainer>
      <ProjectsContainerTitle>
        DISCOVER MY LATEST PROJECTS.
      </ProjectsContainerTitle>
      <CustomContainer>
        <ProjectsDescriptionContainer>
          <FigureContainer>
            <a href="https://google.com" target="_blank">
              <img
                src={"https://baptistebacon.com/wineThumbnail.png"}
                width={800}
                height={400}
              />
            </a>
          </FigureContainer>
        </ProjectsDescriptionContainer>
      </CustomContainer>
    </ProjectsCustomContainer>
  );
}

export default ProjectsContainer;
