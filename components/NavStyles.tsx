import styled from "styled-components";

const mdScreen = "769px";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-content: center;
  justify-items: center;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const NavWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: clamp(16px, calc(1rem + ((1vw - 3.6px) * 0.2564)), 20px);
  color: #fff;
  font-weight: 700;
  flex-direction: row;
  gap: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70%;
  a {
    color: #fff;
    text-decoration: underline;
    font-size: clamp(16px, calc(1rem + ((1vw - 3.6px) * 0.1282)), 18px);
  }
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    cursor: pointer;
    font-weight: 500;
    line-height: 22px;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      color: #fff;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        right: 10%;
        background-color: #88d7cf;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
    a:hover {
      color: #88d7cf;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  cursor: pointer;
  align-items: center;
  a:hover {
    path {
      fill: #3eb9ba;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  span {
    font-size: 1rem;
    color: #101828;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    gap: 0;
    height: 80%;
  }
`;
