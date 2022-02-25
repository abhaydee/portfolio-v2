import ContactContainer from "../Components/ContactContainer";
import HeroScreen from "../Components/HeroScreen";
import IntroductionContainer from "../Components/IntroductionContainer";
import ProjectsContainer from "../Components/ProjectsContainer";
import styles from "../styles/Home.module.css";
import { CustomContainer } from "../utils/CustomComponents";
import Organizations from "../Components/Organizations";
import TechStackContainer from "../Components/TechStackContainer";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div style={{scrollBehavior:"smooth"}}>
      <CustomContainer>
        {/* <Zoom bottom> */}
        <HeroScreen />
        {/* </Zoom> */}
        <Organizations />
                <IntroductionContainer />

        <ProjectsContainer />
        {/* <Fade> */}
        <Skills/>
        <ContactContainer />
        {/* </Fade> */}
      </CustomContainer>
    </div>
  );
}
