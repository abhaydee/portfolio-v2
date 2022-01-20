import Head from "next/head";
import Image from "next/image";
import HeroScreen from "../Components/HeroScreen";
import ProjectsContainer from "../Components/ProjectsContainer";
import styles from "../styles/Home.module.css";
import { CustomContainer } from "../utils/CustomComponents";
export default function Home() {
  return (
    <CustomContainer className={styles.container}>
       <HeroScreen/>
       <ProjectsContainer/>
    </CustomContainer>
  );
}
