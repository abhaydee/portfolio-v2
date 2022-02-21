import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { ComponentReSize } from "../utils/utils";

const Organizations = () => {
  const [activeTab, setActiveTab] = useState("Softway");
  const isMobile = ComponentReSize();
  console.log("logging the is mobile data", isMobile);
  const renderSoftwayDescription = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <Header3>
          Full Stack Engineer{" "}
          <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer">
            @Softway
          </Anchor>
        </Header3>
        <p>Apr 2021 - Present</p>
        <ul style={{ maxWidth: "500px", paddingLeft: 0 }} id="list">
          <ListItem>
            <p>
              I am currently working as a Full Stack Engineer for a from-scratch
              React Native Full-Stack Product
            </p>
          </ListItem>
          <ListItem>
            <p>
              Worked majorly on setting up infrastructure and integrating
              Content Management System(Strapi) API into React Native.
            </p>
          </ListItem>
          <ListItem>
            <p>
              Significantly contributed towards the implementation of creating
              optimized API’s using AWS-APP-SYNC, AWS-LAMBDA, and Typescript.
            </p>
          </ListItem>
          <ListItem>
            <p>
              Optimising the performance of the cross platform app by
              implementing effective cache mechanisms and state management for
              React Native
            </p>
          </ListItem>
          <ListItem>
            <p>
              Integrating several native IOS and Android modules using React
              Native bridge, which effectively contributed to the overall cross
              functionality of the Mobile App
            </p>
          </ListItem>
        </ul>
      </div>
    );
  };

  const renderAccentureDescription = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <Header3>
          Front End Engineer{" "}
          <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer">
            @Accenture
          </Anchor>
        </Header3>
        <p>Oct 2019 - Apr 2021</p>
        <ul style={{ maxWidth: "500px", paddingLeft: 0 }} id="list">
          <ListItem>
            <p>
              Building client intimacy by understanding their functional and UX
              requirements. Developed extensively reusable React Components in
              the UI.
            </p>
          </ListItem>
          <ListItem>
            <p>
              Built from scratch, fully functional e-commerce React product
              using NextJS. Also handled API Integration of React and Drupal
              (Content Management System). The overall functionality of the
              product, and successfully delivered it.
            </p>
          </ListItem>
          <ListItem>
            <p>
              Improved the performance of the Application by over 60% by
              implementing persist cache for pages which required higher
              payloads.{" "}
            </p>
          </ListItem>
          <ListItem>
            <p>
              Mentored several members of the team to upskill from other
              technologies towards NEXTJS and GraphQL.
            </p>
          </ListItem>
        </ul>
      </div>
    );
  };

  const renderKulizaDescription = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <Header3>
          Front End Web/Mobile Engineer{" "}
          <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer">
            @Kuliza Technologies
          </Anchor>
        </Header3>
        <p>July 2019 - Oct 2019</p>
        <ul style={{ maxWidth: "500px", paddingLeft: 0 }} id="list">
          <ListItem>
            <p>
              Implemented one of the most optimized pagination push
              notifications for the mobile app in React Native for Magma
            </p>
          </ListItem>
          <ListItem>
            <p>
              Built the front-end landing page for Standard Chartered bank.
              Improving the codebase fixed several issues and bugs in the
              product.
            </p>
          </ListItem>
          <ListItem>
            <p>
              This Pagination feature enhanced the performance of the app by
              over 50%.
            </p>
          </ListItem>
        </ul>
      </div>
    );
  };
  return (
    <Wrapper>
      <Header>Organization that I have been a part of...</Header>
      {isMobile ? (
        <>
          <TabsContent className="d-flex justify-content-center mx-auto container align-self-center">
            <Button
              className="btn"
              style={{ backgroundColor: "#019872", color: "#fff" }}
              onClick={() => setActiveTab("Softway")}
            >
              Softway
            </Button>
            <Button
              className="btn"
              style={{ backgroundColor: "#019872", color: "#fff" }}
              onClick={() => setActiveTab("Accenture")}
            >
              Accenture
            </Button>
            <Button
              className="btn"
              style={{ backgroundColor: "#019872", color: "#fff" }}
              onClick={() => setActiveTab("Kuliza")}
            >
              Kuliza Technologies
            </Button>
          </TabsContent>
          <TabsContainer>
            {activeTab === "Softway" && renderSoftwayDescription()}
            {activeTab == "Accenture" && renderAccentureDescription()}
            {activeTab == "Kuliza" && renderKulizaDescription()}
          </TabsContainer>
        </>
      ) : (
        <CarouselContainer>
          <Carousel
            itemsToShow={1}
            enableMouseSwipe={false}
            enableSwipe={false}
            pagination={false}
          >
            <div>{renderSoftwayDescription()}</div>
            <div>{renderAccentureDescription()}</div>
            <div>{renderKulizaDescription()}</div>
          </Carousel>
        </CarouselContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  padding-top: 4rem;
  padding-inline: 8rem;
  @media (max-width: 1024px) {
    padding-inline: 1rem;
  }
`;
const Header = styled.h1`
  text-align: center;
  font-family: "Kicker-Black";
  font-weight: bold;
  margin-bottom: 2rem;
`;
const Button = styled.button`
  margin: 3rem;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
  }
  @media (max-width: 1080px) {
    margin: 0.5rem;
  }
`;
const Header5 = styled.h5`
  text-align: center;
`;

const Header3 = styled.h3`
  font-family: "Source-OpenSans";
  text-align: center;z
  margin-top: 1rem;
  line-height: 2.25rem;
`;

const ListItem = styled.li`
  font-family: "Source-OpenSans";
  line-height: 2rem;
  font-size: 1.25rem;
`;

const TabsContainer = styled.div``;
const TabsContent = styled.div``;

const CarouselContainer = styled.div``;

const Anchor =styled.a`
  color:teal;
  &:hover{
    color:teal;
  }
`
export default Organizations;
