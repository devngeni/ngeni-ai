import { Title } from "@/commons";
import { button } from "@/commons/Button";
import styled from "styled-components";

const screen = "769px";
export const LandingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  align-content: center;
  background: url("/LooperBG.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LandingWrapper = styled.div`
  width: 55%;
  height: initial;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-item: center;
  align-content: center;
  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
  }
`;
export const AiTitle = styled(Title)``;

export const AiSub = styled.h2`
  color: #fff;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const AiBody = styled.p`
  font-weight: 500;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 1rem;
  @media (min-width: ${screen}) {
    padding: 0 5rem;
    font-size: 2rem;
    line-height: 33px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;
export const LearnButton = styled(button)`
  background: #3eb9ba;
  border: none;
  cursor: pointer;
  width: 172px;
  display: flex;
  align-items: center;
  &:hover {
    background: none;
    border: 1px solid #3eb9ba;
    transition: 0.3s all ease-in-out;
  }
`;

export const ProjectButton = styled(button)`
  background: none;
  border: 1px solid #3eb9ba;
  cursor: pointer;
  &:hover {
    background: #3eb9ba;
    transition: 0.3s all ease-in-out;
  }
`;
