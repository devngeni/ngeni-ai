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
  font-size: clamp(16px, calc(1rem + ((1vw - 3.6px) * 0.2564)), 20px);
  text-align: center;
  padding: 0 1rem;
  @media (min-width: 769px) {
    padding: 0 5rem;
    line-height: 33px;
    letter-spacing: 0.72px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;
export const LearnButton = styled.button`
  background: #3eb9ba;
  border: none;
  cursor: pointer;
  width: 172px;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1.375rem 2rem;
  color: #fff;
  height: 70px;
  font-size: 18px;

  &:hover {
    background: none;
    border: 1px solid #3eb9ba;
    transition: 0.3s all ease-in-out;
  }
  @media (min-width: 769px) {
    font-size: 20px;
    justify-content: center;
  }
`;

export const ProjectButton = styled(LearnButton)`
  background: none;
  border: 1px solid #3eb9ba;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  &:hover {
    background: #3eb9ba;
    transition: 0.3s all ease-in-out;
  }
`;
