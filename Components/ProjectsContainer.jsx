import React from "react";
import {
  ProjectsCustomContainer,
  ProjectImage,
  CustomContainer,
  FigureContainer,
  CustomImage,
  ProjectsContainerTitle
} from "../utils/CustomComponents";
import styled from "styled-components";
import Image from "next/image";
function ProjectsContainer() {
  
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

  const ProjectsData = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.6rem;
  `;

  const ProjectImage = styled.img`
    // height: 100%;
    // left: 0;
    // position: absolute;
    // top: 0;
    // width: 100%;
    object-fit:cover;
    background-position:center;
  `;

  const projectsList = [
    {
      id: "1",
      projectTitle: "SOFTWAY SOLUTIONS",
      techStack: [
        "React-Native",
        "Javascript",
        "React-Context",
        "StrapiCMS",
        "GraphQL",
        "DYNAMO-DB",
        "AWS-Web-Services",
        "AWS_LAMBDA",
        "MixPanel-Analytics",
      ],
      projectLink: "https://www.culture-plus.com/seneca-go",
      projectImage: "/assets/images/seneca-go.png",
      projectDescription: `I am currently working as Full Stack Engineer for a  from-scratch React Native Full-Stack Product. Working on the API Integration with React Native and GraphQL and AWS-APP-SYNC (Serverless)`,
    },
    {
      id: "2",
      projectTitle: "Accenture South-Africa",
      techStack: [
        "NextJS",
        "React",
        "Javascript",
        "SASS",
        "Redux",
        "Redux-Thunk",
        "Graphql",
        "Adobe-Analytics",
      ],
      projectLink: "https://www.vodacom.co.za/shopping/products",
      projectImage: "/assets/images/vodacom.png",
      projectDescription: `We were building client intimacy by understanding their functional and UX requirements. We have developed extensively reusable React Components in the UI. Made from scratch, fully functional e-commerce React products using NextJS. Worked on API Integration of React with Magento using GraphQL, the Product's overall functionality, and successfully delivered it. I was a part of the Team where we built this Product from scratch. The Front End of this project is built with NEXTJS, React, Redux, GraphQL (Consuming Side)`,
    },
    {
      id: "3",
      projectTitle: "REST Countries with colour theme switcher",
      techStack: ["Javascript", "Next JS", "Redux-Thunk"],
      projectLink: "https://rest-countries-seven.vercel.app/",
      projectImage: "/assets/images/rest-countries.png",
      projectDescription: `A fully-featured application that describes the details of
        countries all around the globe. The most exciting thing that I did
        here was to reduce the API calls and handle all the complex
        functionality using Javascript.`,
    },
    {
      id: "4",
      projectTitle: "Netflix Clone ",
      projectImage: "/assets/images/netflix-clone.png",
      techStack: ["React", "Javascript", "Firebase", "TMDB API", "CSS3"],
      projectLink: "https://netflix-clone-f12a4.web.App",
      projectDescription: `A customized Netflix Landing Page which plays the on-screen trailer of TV Shows & Movies around the globe`,
    },
    {
      id: "5",
      projectTitle: "Social Media Web",
      projectImage: "/assets/images/vodacom.png",
      techStack: [
        "React",
        "React-Context",
        "GraphQL(Apollo-Client)",
        "NodeJS",
        "Apollo Server",
        "MongoDB",
      ],
      projectLink: "https://social-media-web.netlify.app/",
      projectDescription: `A from-scratch Full Stack Application provides a Secure Login System for the users and performs all basic CRUD social media functionalities.`,
    },
    {
      id: "6",
      projectTitle: "Customized Todo List Web Application",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaSript",
        "React",
        "Redux-Thunk",
        "Firebase",
      ],
      projectImage: "/assets/images/todo-list.png",
      projectLink: "https://todo-list-ten-inky.vercel.app/",
      projectDescription: `We all know that a Typical to-do list web application helps a developer understand the CRUD functionalities of the web. I always wanted to build a to-do application rich in UI, yet simple and easier to use.t also comes with a unique dark mode theme for all those AMOLED screens used there. This site is going to look amazing on your phones and desktops. I have given it an honest try.`,
    },
    {
      id: "7",
      projectTitle: "Memory Game",
      techStack: ["HTML5", "CSS3", "JavaSript"],
      projectLink: "https://abhaydee.github.io/Memory-Game/",
      projectImage: "/assets/images/memory-game.png",
      projectDescription: `An interactive memory game built using HTML5, CSS3, JavaScript. The game also consists of appropriate Timer and Scores Section, which makes the game extremely competitive for users.`,
    },
  ];
  return (
    <ProjectsCustomContainer>
      <ProjectsContainerTitle maxWidth={"55rem"}>
        DISCOVER MY LATEST PROJECTS.
      </ProjectsContainerTitle>
      {projectsList.map((projectItem, projectItemIndex) => {
        return (
          <div key={projectItemIndex}>
            <CustomContainer>
              <ProjectsDescriptionContainer>
                <FigureContainer>
                  <a href={projectItem.projectLink} target="_blank">
                    <ProjectImage
                      src={projectItem.projectImage}
                      width={"100%"}
                      height={"585"}
                    />
                  </a>
                  <ProjectsData>
                    <h3>{projectItem.projectTitle}</h3>
                    <p>NEXTJS</p>
                  </ProjectsData>
                </FigureContainer>
              </ProjectsDescriptionContainer>
            </CustomContainer>
          </div>
        );
      })}
    </ProjectsCustomContainer>
  );
}

export default ProjectsContainer;
