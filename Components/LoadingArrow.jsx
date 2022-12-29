import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Chevron = styled.div`
  position: absolute;
  width: 6 * 3.5;
  height: 6 * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;

  &:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #2c3e50;
  }

  &:before {
    left: 0;
    transform: skewY(30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skewY(-30deg);
  }

  @keyframes move-chevron {
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(0.6rem * 3.8);
    }
    66.6% {
      opacity: 1;
      transform: translateY(0.6rem * 5.2);
    }
    100% {
      opacity: 0;
      transform: translateY(0.6rem * 8) scale(0.5);
    }
  }
`;
function LoadingArrow() {
  return (
    <>
      <Container className="container">
        <Chevron className="chevron"></Chevron>
        <Chevron className="chevron"></Chevron>
        <Chevron className="chevron"></Chevron>
      </Container>
    </>
  );
}

export default LoadingArrow;
