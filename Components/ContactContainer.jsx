import Image from "next/image";
import React from "react";
import styled from "styled-components";
const ContactContainerTitle = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContactHeader = styled.a`
  font-family: "Kicker-Black";
  text-decoration: none;
  font-weight: bold;
  font-size: 4rem;
  font-weight: 600;
  z-index: 5;
  display: flex;
  color: teal !important;
  justify-content: center;
  height: 10rem;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;
const ContactDisplay = styled.div`
  // position: relative;
  // width:100%;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 6.4rem;
`;

const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 100%;
  margin-bottom: 1.6rem;
`;

const CopyRight = styled.div`
  font-size: 1.8rem;
  font-family: "Source-OpenSans";
`;

const FooterHeader = styled.h3`
  margin-bottom: 2rem;
  font-family: "Source-OpenSans";
  @media (max-width: 1024px) {
    margin-inline: 1rem;
  }
`;
const TextHeader = styled.h3`
  font-family: "Poppins-Regular";
  @media (max-width: 1080px) {
    margin-bottom: 1rem;
  }
`;

function ContactContainer() {
  return (
    <ContactDisplay id="contact">
      <ContactContainerTitle>
        <ContactHeader
          href="mailto:deshpande.abh@northeastern.edu?Subject=subject message"
          target="_blank"
        >
          deshpande.abh<br></br>@northeastern.edu
        </ContactHeader>
        <TextHeader>
          If you have an interesting idea about a product, Let's get together on
          it.
        </TextHeader>
        <TextHeader>Say hi, and let's chat! ✌🏼</TextHeader>
      </ContactContainerTitle>
      <Footer>
        <FooterHeader>
          Shoot me an email at deshpande.abh@northeastern.edu or find me at
        </FooterHeader>
        <FooterSocials>
          <a
            href="https://www.linkedin.com/in/abhaydee/"
            target="_blank"
            alt="linkedin-logo"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/linkedin-logo.jpg"
              width={50}
              height={50}
              alt="linkedin-logo"
            />
          </a>
          <a
            href="https://github.com/abhaydee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/github-sign.jpg"
              width={50}
              height={50}
              alt="github-logo"
            />
          </a>
          <a
            href="https://twitter.com/abhaycodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/twitter-sign.jpg"
              width={50}
              height={50}
              alt="twitter-logo"
            />
          </a>
        </FooterSocials>
        <CopyRight>@2022 Abhay Deshpande</CopyRight>
      </Footer>
    </ContactDisplay>
  );
}
export default ContactContainer;
