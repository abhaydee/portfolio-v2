import React from "react";
import {
  ProjectsCustomContainer,
  CustomContainer,
  FigureContainer,
  ProjectsContainerTitle,
} from "../utils/CustomComponents";
import styled from "styled-components";
import { useRouter } from "next/router";
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
    font-family: "Source-OpenSans";
    align-items: center;
    margin-top: 1.6rem;
  `;
  const CustomImageContainer = styled.div`
    @media (min-width: 1024px) {
      filter: grayscale(100%) contrast(1) brightness(90%);
      &:hover {
        filter: none;
        opacity: 100%;
        transition: opacity 500ms linear 0s;
        background-color: transparent;
      }
    }
  `;
  const ProjectImage = styled.img`
    // height: 100%;
    // left: 0;
    // position: absolute;
    // top: 0;
    // width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    background-position: center;
    filter: ${(props) => `drop-shadow(0 0 0.75rem ${props.color}) !important`};
    &:hover {
      transform: scale(1.05);
      transition: transform 1.05s ease-in-out;
    }
  `;
  const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  `;

  const ProjectTechStackTitle = styled.p`
    font-size: 1.5rem;
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  `;
  const projectsList = [
    {
      id: "1",
      projectTitle: "PRIMOBOTS",
      techStack: [
        { tech: "NextJS", logoUrl: "/assets/images/nextjs-logo.jpg" },
        "Javascript",
        "Styled-Components",
        "Ethersjs",
        "React",
        "Vercel",
      ],
      projectLink: "https://primobots.io",
      external: true,
      projectImage: "/assets/images/primobots.png",
      dropShadowColor: "white",
      projectDescription: `I am currently working as Full Stack Engineer for a  from-scratch React Native Full-Stack Product. Working on the API Integration with React Native and GraphQL and AWS-APP-SYNC (Serverless)`,
    },
    {
      id: "1",
      projectTitle: "SOFTWAY SOLUTIONS",
      techStack: [
        { tech: "React-Native", logoUrl: "/assets/images/thirdweb-logo.jpeg" },
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
      projectImage: "/assets/images/seneca-go.jpg",
      dropShadowColor: "white",
      projectDescription: `I am currently working as Full Stack Engineer for a  from-scratch React Native Full-Stack Product. Working on the API Integration with React Native and GraphQL and AWS-APP-SYNC (Serverless)`,
    },
    {
      id: "2",
      projectTitle: "Accenture South-Africa",
      techStack: [
        { tech: "NextJS", logoUrl: "/assets/images/nextjs-logo.jpg" },
      ],
      projectLink: "https://www.vodacom.co.za/shopping/products",
      projectImage: "/assets/images/vodacom.jpg",
      external: true,
      dropShadowColor: "white",
      projectDescription: `We were building client intimacy by understanding their functional and UX requirements. We have developed extensively reusable React Components in the UI. Made from scratch, fully functional e-commerce React products using NextJS. Worked on API Integration of React with Magento using GraphQL, the Product's overall functionality, and successfully delivered it. I was a part of the Team where we built this Product from scratch. The Front End of this project is built with NEXTJS, React, Redux, GraphQL (Consuming Side)`,
    },
    {
      id: "4",
      projectTitle: "Coinbase Clone for crypto transactions",
      externalLink: "https://coinbase-clone-three.vercel.app/",
      techStack: [
        { tech: "ThirdWeb", logoUrl: "/assets/images/thirdweb-logo.jpeg" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.jpg" },
        { tech: "Nextjs", logoUrl: "/assets/images/nextjs-logo.jpg" },
        { tech: "MetaMask", logoUrl: "/assets/images/metamask-logo.jpg" },
        { tech: "Sanity", logoUrl: "/assets/images/sanity-logo.jpg" },
      ],
      projectLink: "/coinbase-clone",
      external: false,
      dropShadowColor: "white",
      projectImage: "/assets/images/coinbase.jpg",
      projectImage2: "/assets/images/coinbase2.jpg",
      projectDescription: `A dynamic UI web application which enables users to send/receive payments in the form of CryptoCurrency. The website also describes the portfolio details of the users by analysing and integrating metamask wallet into the web application.`,
      projectShortDescription: `The users can click on Send/Receive button to utilize crypto transactions through meta-mask.`,
    },
    {
      id: "4",
      projectTitle: "REST Countries with colour theme switcher",
      externalLink: "https://rest-countries-seven.vercel.app/",
      techStack: [
        { tech: "Nextjs", logoUrl: "/assets/images/nextjs-logo.jpg" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.jpg" },
        { tech: "Redux", logoUrl: "/assets/images/redux-logo.png" },
        { tech: "SASS", logoUrl: "/assets/images/sass-logo.jpg" },
      ],
      projectLink: "/Rest-Countries",
      external: false,
      dropShadowColor: "white",
      projectImage: "/assets/images/rest-countries.jpg",
      projectImage2: "/assets/images/rest-countries.jpg",
      projectDescription: `A fully-featured application that describes the details of
        countries all around the globe. The most exciting thing that I worked on was to reduce the API calls and handle all the complex
        functionality using Javascript.`,
      projectShortDescription: `The web app also has a toggle feature where the users can toggle between dark/light theme based on their preference`,
    },
    {
      id: "6",
      projectTitle: "Social Media Web",
      projectImage: "/assets/images/social-media-web.png",
      projectImage2: "/assets/images/social-media-web2.png",
      externalLink: "https://social-media-web.netlify.app/",
      techStack: [
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.jpg" },
        { tech: "ReactJS", logoUrl: "/assets/images/react-logo.jpg" },
        { tech: "GraphQL", logoUrl: "/assets/images/graphql-logo.jpg" },
        { tech: "NodeJS", logoUrl: "/assets/images/node-logo.jpeg" },
        { tech: "MongoDB", logoUrl: "/assets/images/mongodb-logo.jpg" },
      ],
      external: false,
      dropShadowColor: "white",
      projectLink: "/Social-Media-Web",
      projectShortDescription: `A secured social media web application which implements all the CRUD functionalities of Social Media. `,
      projectDescription: `A from-scratch Full Stack Application provides a Secure Login System for the users and performs all basic CRUD social media functionalities.`,
    },
    {
      id: "7",
      projectTitle: "Customized Todo List Web Application",
      externalLink: " https://todo-list-ten-inky.vercel.app/",
      techStack: [
        { tech: "ReactJS", logoUrl: "/assets/images/react-logo.jpg" },
        { tech: "CSS", logoUrl: "/assets/images/css-logo.jpg" },
        { tech: "SASS", logoUrl: "/assets/images/sass-logo.jpg" },
        { tech: "Redux", logoUrl: "/assets/images/redux-logo.png" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.jpg" },
      ],
      projectImage: "/assets/images/todo-list.jpg",
      projectImage2: "/assets/images/todo-list2.png",
      external: false,
      dropShadowColor: "white",
      projectLink: "/todo-list",
      projectShortDescription: `It also comes with a unique dark mode theme for all those AMOLED screens out there. This website is going to look amazing on your phones and desktops. I have given it an honest try.`,
      projectDescription: `We all know that a Typical to-do list web application helps a developer understand the CRUD functionalities of the web. I always wanted to build a to-do application rich in UI, yet simple and easier to use.`,
    },
    {
      id: "5",
      projectTitle: "Netflix Clone",
      projectImage: "/assets/images/netflix-clone.jpg",
      projectImage2: "/assets/images/rest-countries.jpg",
      externalLink: "https://netflix-clone-f12a4.web.App",
      techStack: [
        { tech: "ReactJS", logoUrl: "/assets/images/react-logo.jpg" },
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.jpg" },
        { tech: "CSS", logoUrl: "/assets/images/css-logo.jpg" },
        { tech: "Firebase", logoUrl: "/assets/images/firebase-logo.jpg" },
      ],
      projectLink: "/Netflix",
      external: false,
      dropShadowColor: "white",
      projectDescription: `A clone of the Netflix landing Page built with ReactJS and Firebase. I have used TMDB Database to render all the TV Shows and Movies data.`,
      projectShortDescription: `The most exciting feature in this project is that the web app can also play on screen trailers of shows and movies displayed.`,
    },
    {
      id: "8",
      projectTitle: "Memory Game",
      externalLink: "https://abhaydee.github.io/Memory-Game/",
      techStack: [
        { tech: "Javascript", logoUrl: "/assets/images/javascript-logo.jpg" },
        { tech: "CSS", logoUrl: "/assets/images/css-logo.jpg" },
        { tech: "HTML", logoUrl: "/assets/images/html-logo.jpg" },
      ],
      projectLink: "/Memory-Game",
      projectImage: "/assets/images/memory-game.jpg",
      projectImage2: "/assets/images/memory-game2.png",
      external: false,
      dropShadowColor: "white",
      projectShortDescription: `An interactive Memory Game through which the users can challenge themselves to complete the Game.`,
      projectDescription: `The web application also consists of timer and points which keeps the participants on their toes and motivate them them to perform better in their next try.`,
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
    <ProjectsCustomContainer id="projects">
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
                  <CustomImageContainer
                    onClick={() => handleNavigation(projectItem)}
                    style={{ cursor: "pointer" }}
                  >
                    <ProjectImage
                      src={projectItem.projectImage}
                      width={"100%"}
                      color={projectItem.dropShadowColor}
                      alt="project-image"
                      // height={"585"}
                      style={{
                        objectFit: "cover",
                        backgroundPosition: "center",
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "30",
                      }}
                    />
                  </CustomImageContainer>
                  <ProjectsData>
                    <ProjectTitle>{projectItem.projectTitle}</ProjectTitle>
                    <ProjectTechStackTitle>
                      {projectItem.techStack[0].tech}
                    </ProjectTechStackTitle>
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
