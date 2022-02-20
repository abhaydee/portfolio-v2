import Head from "next/head";
import Image from "next/image";
import ContactContainer from "../Components/ContactContainer";
import HeroScreen from "../Components/HeroScreen";
import IntroductionContainer from "../Components/IntroductionContainer";
import ProjectsContainer from "../Components/ProjectsContainer";
import styles from "../styles/Home.module.css";
import { CustomContainer } from "../utils/CustomComponents";
import Organizations from "../Components/Organizations";
import TechStackContainer from "../Components/TechStackContainer";

export default function Home() {
  return (
    <div style={{scrollBehavior:"smooth"}}>
      <CustomContainer>
        {/* <Zoom bottom> */}
        <HeroScreen />
        {/* </Zoom> */}
        <Organizations />
        <ProjectsContainer />
        {/* <Fade> */}
        <IntroductionContainer />
        <ContactContainer />
        {/* </Fade> */}
      </CustomContainer>
    </div>
  );
}
