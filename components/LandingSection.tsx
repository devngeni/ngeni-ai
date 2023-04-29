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

export default function LandingSection() {
  return (
    <LandingContainer>
      <LandingWrapper>
        <Fade  duration={2000} direction="down">
          <Title>Unlocking The Future</Title>
          <AiSub>NGENI AI</AiSub>
        </Fade>
        <Fade  direction="up" duration={2000}>
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
