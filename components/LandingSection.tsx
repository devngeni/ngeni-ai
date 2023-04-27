import { Title } from "@/commons";
import {
  AiBody,
  AiSub,
  AiTitle,
  ButtonContainer,
  LandingContainer,
  LandingWrapper,
  LearnButton,
  ProjectButton,
} from "./Landing.Styles";

export default function LandingSection() {
  return (
    <LandingContainer>
      <LandingWrapper>
        <Title>Unlocking The Future</Title>
        <AiSub>NGENI AI</AiSub>
        <AiBody>
          Empower your business with the future of technology. Join us in
          revolutionizing industries with our cutting-edge AI and machine
          learning solutions.
        </AiBody>
        <ButtonContainer>
          <LearnButton>Learn More</LearnButton>
          <ProjectButton>Projects</ProjectButton>
        </ButtonContainer>
      </LandingWrapper>
    </LandingContainer>
  );
}
