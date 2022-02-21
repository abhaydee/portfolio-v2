import Image from "next/image";
import React from "react";
import styled from "styled-components";
function ContactContainer() {
  const ContactContainerTitle = styled.div`
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const ContactHeader = styled.a`
    color: #242424;
    font-family: "Kicker-Black";
    color: teal;
    text-decoration:none;
    font-weight: bold;
    font-size: 4rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 10rem;
    flex-direction: column;
    &:hover{
      color:teal;
    }
    @media (max-width: 576px) {
      font-size: 1.5rem;
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
  return (
    <ContactDisplay>
      <ContactContainerTitle>
        <ContactHeader href="mailto:hi@abhaydee.com">HI@ABHAYDEE.COM</ContactHeader>
      </ContactContainerTitle>
      <Footer>
        <FooterSocials>
          <a href="https://www.linkedin.com/in/abhaydee/" target="_blank" alt="linkedin-logo" rel="noopener noreferrer">
            <Image
              src="/assets/images/linkedin-logo.jpg"
              width={50}
              height={50}
              alt="linkedin-logo"
            />
          </a>
          <a href="https://github.com/abhaydee" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/github-sign.jpg" width={50} height={50} alt="github-logo" />
          </a>
          <a href="https://twitter.com/abhaycodes" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/twitter-sign.jpg" width={50} height={50} alt="twitter-logo"/>
          </a>
        </FooterSocials>
        <CopyRight>@2022 Abhay Deshpande</CopyRight>
      </Footer>
    </ContactDisplay>
  );
}
export default ContactContainer;
