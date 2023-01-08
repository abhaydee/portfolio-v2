import ContactContainer from "../Components/ContactContainer";
import HeroScreen from "../Components/HeroScreen";
import IntroductionContainer from "../Components/IntroductionContainer";
import ProjectsContainer from "../Components/ProjectsContainer";
import { CustomContainer } from "../utils/CustomComponents";
import Organizations from "../Components/Organizations";
import Skills from "../Components/Skills";
import { NextSeo } from "next-seo";
import Head from "next/head";
import AwardsContainer from "../Components/AwardsContainer";
export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <NextSeo
        title="Abhay Deshpande - Full Stack Developer"
        description="My Personal Portfolio"
        openGraph={{
          type: "website",
          url: "https://abhaydee.com",
          images: [
            {
              url: "https://abhaydee.com/assets/images/cover-image.png",
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
        <HeroScreen />
        <Organizations />
        <IntroductionContainer />
        <AwardsContainer />
        <ProjectsContainer />
        <Skills />
        <ContactContainer />
      </CustomContainer>
    </div>
  );
}
