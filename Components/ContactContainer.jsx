import React from "react";
import styled from "styled-components";
function ContactContainer() {
  const ContactContainerTitle = styled.div`
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const ContactHeader = styled.h3`
    color: #242424;
    font-size: 4rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 10rem;
    flex-direction: column;
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

  const CopyRight=styled.div`
    font-size: 1.8rem;
  `;
  return (
    <ContactDisplay>
      <ContactContainerTitle>
        <ContactHeader>ABHAYGIRISH1997@GMAIL.COM</ContactHeader>
      </ContactContainerTitle>
      <Footer>
        <FooterSocials>
          <img
            src="/assets/images/linkedin-logo.png"
            width={50}
            height={50}
          />
          <img
            src="/assets/images/github-sign.png"
            width={50}
            height={50}
          />
          <img
            src="/assets/images/twitter-sign.png"
            width={50}
            height={50}
          />
        </FooterSocials>
        <CopyRight>
            @2022 Abhay Deshpande
        </CopyRight>
      </Footer>
    </ContactDisplay>
  );
}
export default ContactContainer;
