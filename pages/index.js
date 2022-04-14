import ContactContainer from "../Components/ContactContainer";
import HeroScreen from "../Components/HeroScreen";
import IntroductionContainer from "../Components/IntroductionContainer";
import ProjectsContainer from "../Components/ProjectsContainer";
import styles from "../styles/Home.module.css";
import { CustomContainer } from "../utils/CustomComponents";
import Organizations from "../Components/Organizations";
import TechStackContainer from "../Components/TechStackContainer";
import Skills from "../Components/Skills";
import { NextSeo } from "next-seo";
import Head from "next/head";
export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
      </Head>
      <NextSeo
        title="Abhay Deshpande - Full Stack Developer"
        description="My Personal Portfolio"
        openGraph={{
          type: "website",
          url: "https://abhaydee.com",
          images: [
            {
              url: "https://primobots.io/assets/images/cover-image.png",
              width: 1200,
              height: 630,
              alt: "Portfolio cover image",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@abhaycodes",
          site: "https://abhaydee.com",
          cardType: "summary_large_image",
        }}
      />
      <CustomContainer>
        {/* <Zoom bottom> */}
        <HeroScreen />
        {/* </Zoom> */}
        <Organizations />
        <IntroductionContainer />

        <ProjectsContainer />
        {/* <Fade> */}
        <Skills />
        <ContactContainer />
        {/* </Fade> */}
      </CustomContainer>
    </div>
  );
}
