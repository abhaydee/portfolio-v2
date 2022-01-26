import Head from "next/head";
import Image from "next/image";
import ContactContainer from "../Components/ContactContainer";
import HeroScreen from "../Components/HeroScreen";
import IntroductionContainer from "../Components/IntroductionContainer";
import ProjectsContainer from "../Components/ProjectsContainer";
import styles from "../styles/Home.module.css";
import { CustomContainer } from "../utils/CustomComponents";
export default function Home() {
  return (
    <CustomContainer className={styles.container}>
       <HeroScreen/>
       <ProjectsContainer/>
       <IntroductionContainer/>
       <ContactContainer/>
    </CustomContainer>
  );
}
