import styled from "styled-components";
export const CustomContainer = styled.div``;

export const HeroScreenContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  @media (max-width: 576px) {
    height: 18rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 3.2rem 7rem 0;
  @media (max-width: 500px) {
    justify-content: space-between;
    font-size: 12px;
    padding: 0.5rem;
    display: none;
  }
`;

export const ProjectsCustomContainer = styled.div`
  background-color: #242424;
  color: #fff;
`;

export const Header3 = styled.a`
  padding-right: 10px;
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  &::hover {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    padding-right: 1rem;
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
}
`;

export const ProjectsContainerTitle = styled.h1`
  padding: 3rem 1rem 2rem 1rem;
  @media (min-width: 768px) {
    padding: 6rem 0 4rem 8rem;
    font-size: 5rem;
    max-width: ${(props) => props.maxWidth};
  }
`;
