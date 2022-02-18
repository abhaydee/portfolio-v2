import React from "react";
import {
  ProjectsCustomContainer,
  ProjectImage,
  CustomContainer,
  FigureContainer,
  CustomImage,
  ProjectsContainerTitle,
} from "../utils/CustomComponents";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
function ProjectsContainer() {
  const router = useRouter();
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
    object-fit: cover;
    background-position: center;
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
      external: true,
      projectImage: "/assets/images/seneca-go.png",
      projectDescription: `I am currently working as Full Stack Engineer for a  from-scratch React Native Full-Stack Product. Working on the API Integration with React Native and GraphQL and AWS-APP-SYNC (Serverless)`,
    },
    {
      id: "2",
      projectTitle: "Accenture South-Africa",
      techStack: [
        { tech: "NextJS", logoUrl: "/assets/images/nextjs-logo.png" },
      ],
      projectLink: "https://www.vodacom.co.za/shopping/products",
      projectImage: "/assets/images/vodacom.png",
      external: true,
      projectDescription: `We were building client intimacy by understanding their functional and UX requirements. We have developed extensively reusable React Components in the UI. Made from scratch, fully functional e-commerce React products using NextJS. Worked on API Integration of React with Magento using GraphQL, the Product's overall functionality, and successfully delivered it. I was a part of the Team where we built this Product from scratch. The Front End of this project is built with NEXTJS, React, Redux, GraphQL (Consuming Side)`,
    },
    {
      id: "4",
      projectTitle: "Coinbase Clone for crypto transactions",
      externalLink: "https://coinbase-clone-three.vercel.app/",
      techStack: [
        { tech: "ThirdWeb", logoUrl: "/assets/images/thirdweb-logo.jpeg" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.png" },
        { tech: "Nextjs", logoUrl: "/assets/images/nextjs-logo.png" },
        { tech: "MetaMask", logoUrl: "/assets/images/metamask-logo.png" },
        { tech: "Sanity", logoUrl: "/assets/images/sanity-logo.png" },
      ],
      projectLink: "/coinbase-clone",
      external: false,
      projectImage: "/assets/images/coinbase.png",
      projectImage2: "/assets/images/coinbase2.png",
      projectDescription: `A fully-featured application that describes the details of
        countries all around the globe. The most exciting thing that I did
        here was to reduce the API calls and handle all the complex
        functionality using Javascript.`,
      projectShortDescription: `A dynamic UI web application which enables users to send/receive payments in the form of CryptoCurrency. `,
    },
    {
      id: "4",
      projectTitle: "REST Countries with colour theme switcher",
      externalLink: "https://rest-countries-seven.vercel.app/",
      techStack: [
        { tech: "Nextjs", logoUrl: "/assets/images/nextjs-logo.png" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.png" },
        { tech: "Redux", logoUrl: "/assets/images/redux-logo.jpeg" },
        { tech: "SASS", logoUrl: "/assets/images/sass-logo.png" },
      ],
      projectLink: "/Rest-Countries",
      external: false,
      projectImage: "/assets/images/rest-countries.png",
      projectImage2: "/assets/images/rest-countries.png",
      projectDescription: `A fully-featured application that describes the details of
        countries all around the globe. The most exciting thing that I did
        here was to reduce the API calls and handle all the complex
        functionality using Javascript.`,
      projectShortDescription: `A fully-featured application that describes the details of countries all around the globe. `,
    },
    {
      id: "5",
      projectTitle: "Netflix Clone",
      projectImage: "/assets/images/netflix-clone.png",
      projectImage2: "/assets/images/rest-countries.png",
      externalLink: "https://netflix-clone-f12a4.web.App",
      techStack: [
        { tech: "ReactJS", logoUrl: "/assets/images/react-logo.png" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.png" },
        { tech: "CSS", logoUrl: "/assets/images/css-logo.png" },
        { tech: "Firebase", logoUrl: "/assets/images/firebase-logo.png" },
      ],
      projectLink: "/Netflix",
      external: false,
      projectDescription: `A customized Netflix Landing Page which plays the on-screen trailer of TV Shows & Movies around the globe`,
      projectShortDescription: `A clone of the Netflix landing Page which plays onscreens trailers for all the TV shows and movies.`,
    },
    {
      id: "6",
      projectTitle: "Social Media Web",
      projectImage: "/assets/images/social-media-web.png",
      externalLink: "https://social-media-web.netlify.app/",
      techStack: [
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.png" },
        { tech: "ReactJS", logoUrl: "/assets/images/react-logo.png" },
        { tech: "GraphQL", logoUrl: "/assets/images/graphql-logo.png" },
        { tech: "NodeJS", logoUrl: "/assets/images/node-logo.png" },
        { tech: "MongoDB", logoUrl: "/assets/images/mongodb-logo.png" },
      ],
      external: false,
      projectLink: "/Social-Media-Web",
      projectShortDescription: `A secured social media web application which implements all the CRUD functionalities of Social Media. `,
      projectDescription: `A from-scratch Full Stack Application provides a Secure Login System for the users and performs all basic CRUD social media functionalities.`,
    },
    {
      id: "7",
      projectTitle: "Customized Todo List Web Application",
      externalLink: " https://todo-list-ten-inky.vercel.app/",
      techStack: [
        { tech: "ReactJS", logoUrl: "/assets/images/react-logo.png" },
        { tech: "GraphQL", logoUrl: "/assets/images/graphql-logo.png" },
        { tech: "CSS", logoUrl: "/assets/images/css-logo.png" },
        { tech: "Redux", logoUrl: "/assets/images/redux-logo.jpeg" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.png" },
      ],
      projectImage: "/assets/images/todo-list.png",
      external: false,
      projectLink: "/todo-list",
      projectShortDescription: `We all know that a Typical to-do list web application helps a developer understand the CRUD functionalities of the web. I always wanted to build a to-do application rich in UI, yet simple and easier to use.`,
      projectDescription: `We all know that a Typical to-do list web application helps a developer understand the CRUD functionalities of the web. I always wanted to build a to-do application rich in UI, yet simple and easier to use.t also comes with a unique dark mode theme for all those AMOLED screens used there. This site is going to look amazing on your phones and desktops. I have given it an honest try.`,
    },
    {
      id: "8",
      projectTitle: "Memory Game",
      externalLink: "https://abhaydee.github.io/Memory-Game/",
      techStack: [
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.png" },
        { tech: "CSS", logoUrl: "/assets/images/css-logo.png" },
        { tech: "HTML", logoUrl: "/assets/images/html-logo.png" },
      ],
      projectLink: "/Memory-Game",
      projectImage: "/assets/images/memory-game.png",
      external: false,
      projectShortDescription: `An interactive memory game built using HTML5, CSS3, JavaScript.`,
      projectDescription: `An interactive memory game built using HTML5, CSS3, JavaScript. The game also consists of appropriate Timer and Scores Section, which makes the game extremely competitive for users.`,
    },
  ];

  const handleNavigation = (projectItem) => {
    if (typeof window !== undefined && projectItem.external) {
      window.open(projectItem.projectLink, "_blank");
    } else {
      localStorage.setItem("Project-Details", JSON.stringify(projectItem));
      router.push(projectItem.projectLink);
    }
  };
  return (
    <ProjectsCustomContainer>
      <ProjectsContainerTitle maxWidth={"55rem"}>
        DISCOVER MY LATEST PROJECTS.
      </ProjectsContainerTitle>
      {/* <Fade bottom> */}
      {projectsList.map((projectItem, projectItemIndex) => {
        return (
          <div key={projectItemIndex}>
            <CustomContainer>
              <ProjectsDescriptionContainer>
                <FigureContainer>
                  <div
                    onClick={() => handleNavigation(projectItem)}
                    style={{ cursor: "pointer" }}
                  >
                    <ProjectImage
                      src={projectItem.projectImage}
                      width={"100%"}
                      // height={"585"}
                      style={{
                        objectFit: "cover",
                        backgroundPosition: "center",
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "30",
                      }}
                    />
                  </div>
                  <ProjectsData>
                    <h3>{projectItem.projectTitle}</h3>
                    <p>{projectItem.techStack[0].tech}</p>
                  </ProjectsData>
                </FigureContainer>
              </ProjectsDescriptionContainer>
            </CustomContainer>
          </div>
        );
      })}
      {/* </Fade> */}
    </ProjectsCustomContainer>
  );
}

export default ProjectsContainer;
