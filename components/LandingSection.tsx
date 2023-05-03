import { Title } from "@/commons";
import {
  AiBody,
  AiSub,
  ButtonContainer,
  LandingContainer,
  LandingWrapper,
  LearnButton,
  ProjectButton,
} from "./Landing.Styles";
import { Fade } from "react-awesome-reveal";
import WordFlick from "@/commons/WordFade";
import { useEffect, useState } from "react";

export default function LandingSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <LandingContainer>
      <LandingWrapper>
        {isSmallScreen ? (
          <Fade duration={2000} direction="down">
            <Title>Unlocking The Future</Title>
            <AiSub><WordFlick words={["NGENI AI"]}></WordFlick></AiSub>
          </Fade>
        ) : (
          <Fade duration={2000} direction="down">
            <Title>
              <WordFlick words={[" Unlocking The Future"]}></WordFlick>
            </Title>
            <AiSub>NGENI AI</AiSub>
          </Fade>
        )}
        <Fade direction="up" duration={2000}>
          <AiBody>
            Empower your business with the future of technology. Join us in
            revolutionizing industries with our cutting-edge AI and machine
            learning solutions.
          </AiBody>
          <ButtonContainer>
            <LearnButton>Learn More</LearnButton>
            <ProjectButton>Projects</ProjectButton>
          </ButtonContainer>
        </Fade>
      </LandingWrapper>
    </LandingContainer>
  );
}
