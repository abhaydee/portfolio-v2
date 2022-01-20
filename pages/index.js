import Head from "next/head";
import Image from "next/image";
import HeroScreen from "../Components/HeroScreen";
import styles from "../styles/Home.module.css";
import { CustomContainer } from "../utils/CustomComponents";
export default function Home() {
  return (
    <CustomContainer className={styles.container}>
       <HeroScreen/>
    </CustomContainer>
  );
}
