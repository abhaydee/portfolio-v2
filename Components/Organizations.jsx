import React, { useState } from "react";
import styled from "styled-components";

const Organizations = () => {
  const [activeTab, setActiveTab] = useState("Softway");
  const renderSoftwayDescription = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>
          Full Stack Engineer{" "}
          <a href="https://google.com" target="_blank">
            @Softway
          </a>
        </h3>
        <p>Apr 2021 - Present</p>
        <ul style={{ maxWidth: "500px" }} id="list">
          <li>
            <p>
              I am currently working as a Full Stack Engineer for a from-scratch
              React Native Full-Stack Product
            </p>
          </li>
          <li>
            <p>
              Worked majorly on setting up infrastructure and integrating
              Content Management System(Strapi) API into React Native.
            </p>
          </li>
          <li>
            <p>
              Significantly contributed towards the implementation of creating
              optimized API’s using AWS-APP-SYNC, AWS-LAMBDA, and Typescript.
            </p>
          </li>
          <li>
            <p>
              Optimising the performance of the cross platform app by
              implementing effective cache mechanisms and state management for
              React Native
            </p>
          </li>
          <li>
            <p>
              Integrating several native IOS and Android modules using React
              Native bridge, which effectively contributed to the overall cross
              functionality of the Mobile App
            </p>
          </li>
        </ul>
      </div>
    );
  };

  const renderAccentureDescription = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>
          Front End Engineer{" "}
          <a href="https://google.com" target="_blank">
            @Accenture
          </a>
        </h3>
        <p>Oct 2019 - Apr 2021</p>
        <ul style={{ maxWidth: "500px" }} id="list">
          <li>
            <p>
              Building client intimacy by understanding their functional and UX
              requirements. Developed extensively reusable React Components in
              the UI.
            </p>
          </li>
          <li>
            <p>
              Built from scratch, fully functional e-commerce React product
              using NextJS. Also handled API Integration of React and Drupal
              (Content Management System). The overall functionality of the
              product, and successfully delivered it.
            </p>
          </li>
          <li>
            <p>
              Improved the performance of the Application by over 60% by
              implementing persist cache for pages which required higher
              payloads.{" "}
            </p>
          </li>
          <li>
            <p>
              Mentored several members of the team to upskill from other
              technologies towards NEXTJS and GraphQL.
            </p>
          </li>
        </ul>
      </div>
    );
  };

  const renderKulizaDescription = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>
          React & React Native Developer{" "}
          <a href="https://google.com" target="_blank">
            @Kuliza Technologies
          </a>
        </h3>
        <p>July 2019 - Oct 2019</p>
        <ul style={{ maxWidth: "500px" }} id="list">
          <li>
            <p>
              Implemented one of the most optimized pagination push
              notifications for the mobile app in React Native for Magma
            </p>
          </li>
          <li>
            <p>
              Built the front-end landing page for Standard Chartered bank.
              Improving the codebase fixed several issues and bugs in the
              product.
            </p>
          </li>
          <li>
            <p>
              This Pagination feature enhanced the performance of the app by
              over 50%.
            </p>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Wrapper>
      <Header>Organization that I have been a part of...</Header>
      <div className="d-flex justify-content-center mx-auto container">
        <Button className="btn" onClick={() => setActiveTab("Softway")} >
          Softway
        </Button>
        <Button
          className={`btn ${
            activeTab === "Accenture"
              ? "text-decoration:underline"
              : "text-decoration:none;"
          }`}
          onClick={() => setActiveTab("Accenture")}
        >
          Accenture
        </Button>
        <Button className="btn" onClick={() => setActiveTab("Kuliza")}>
          Kuliza Technologies
        </Button>
      </div>
      <div>
        {activeTab === "Softway" && renderSoftwayDescription()}
        {activeTab == "Accenture" && renderAccentureDescription()}
        {activeTab == "Kuliza" && renderKulizaDescription()}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  padding-top: 4rem;
  padding-inline: 8rem;
  @media (max-width: 1024px) {
    padding-inline:1rem;
  }
`;
const Header = styled.h1`
  text-align: center;
`;
const Button = styled.button`
  margin: 2rem;
  background-color: trasparent !important;
  color: black;
  @media (max-width: 1080px) {
    margin: 0.5rem;
  }
`;
const Header5 = styled.h5`
  text-align: center;
`;
export default Organizations;
