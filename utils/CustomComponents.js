import styled from "styled-components";
export const CustomContainer = styled.div``;

export const HeroScreenContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  @media (max-width: 1024px) {
    overflow: hidden;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 3.2rem 7rem 0;
  @media (max-width: 500px) {
    justify-content: space-between;
    padding: 1rem;
    /* display: none; */
  }
`;

export const ProjectsCustomContainer = styled.div`
  background-color: #242424;
  color: #fff;
`;

export const Header3 = styled.a`
  padding-right: 10px;
  font-family: "ClashDisplay-Bold";
  font-weight: bold;
  color: black;
  font-size: 1.75rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: teal;
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const ProjectImage = styled.img``;

export const FigureContainer = styled.figure`
  position: relative;
  margin-bottom: 5rem;
  margin-inline: 6rem;
  @media (max-width: 576px) {
    margin-inline: 1rem;
  }
`;

export const CustomImage = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ProjectsContainerTitle = styled.h1`
  padding: 3rem 1rem 2rem 1rem;
  font-family: "Kicker-Black";
  max-width: 50rem;
  @media (min-width: 768px) {
    padding: 6rem 0 4rem 5.5rem;
    font-size: 4rem;
    max-width: ${(props) => props.maxWidth};
  }
`;
