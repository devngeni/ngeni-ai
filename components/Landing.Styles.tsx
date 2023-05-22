import { Title } from "@/commons";
import styled from "styled-components";

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
  @media (max-width: 768px) {
    background-size: 100% 40%;
    background-position: bottom;
  }
`;

export const LandingWrapper = styled.div`
  width: 80%;
  height: initial;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AiTitle = styled(Title)``;

export const AiSub = styled.h2`
  color: #fff;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: clamp(30px, calc(1.875rem + ((1vw - 3.6px) * 1.9231)), 60px);
  line-height: 73px;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const AiBody = styled.p`
  font-weight: 300;
  color: #fff;
  font-size: clamp(16px, calc(1rem + ((1vw - 3.6px) * 0.2564)), 20px);
  text-align: center;
  @media (min-width: 769px) {
    line-height: 33px;
    letter-spacing: 0.72px;
    align-self: center;
    width: 50%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
`;
export const LearnButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  background: #3eb9ba;
  border: none;
  cursor: pointer;
  width: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  line-height: 26px;
  color: #ebebeb;
  height: 70px;
  font-size: clamp(16px, calc(1rem + ((1vw - 3.6px) * 0.2564)), 20px);
  font-weight: 400;
  &:hover {
    background: none;
    border: 1px solid #3eb9ba;
    transition: 0.3s all ease-in-out;
  }
  @media (max-width: 768px) {
    width: 40%;
    height: 52px;
  }
`;

export const ProjectButton = styled(LearnButton)`
  background: none;
  border: 1px solid #3eb9ba;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: #3eb9ba;
    transition: 0.3s all ease-in-out;
  }
`;
