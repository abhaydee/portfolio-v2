import React, { useState } from "react";
import styled from "styled-components";

const Organizations = () => {
  const [activeTab, setActiveTab] = useState("Softway");
  return (
    <Wrapper>
      <Header>Organization that I have been a part of...</Header>
      <div className="d-flex justify-content-center mx-auto container">
        <Button className="btn btn-primary" onClick={()=>setActiveTab("Softway")}>Softway</Button>
        <Button className="btn btn-primary" onClick={()=>setActiveTab("Accenture")}>Accenture</Button>
        <Button className="btn btn-primary" onClick={()=>setActiveTab("Kuliza")}>Kuliza Technologies</Button>
        {activeTab==="Softway" &&
          <h1>Full Stack Engineer @ Softway</h1>
        }
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  padding-top: 4rem;
  padding-line:8rem;
  // @media (max-width: 1024px) {
  //   padding: 1rem;
  // }
`;
const Header = styled.h1`
  text-align: center;
`;
const Button = styled.button`
  margin:2rem;
`

export default Organizations;
