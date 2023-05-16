import styled from "styled-components";

const mdScreen = "769px";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-content: center;
  justify-items: center;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  z-index: 100;
  top: 3%;
`;
export const NavWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  flex-direction: row;
  gap: 10px;
`;

export const NavLinks = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    gap: 5rem;
    cursor: pointer;
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
  img:hover{
    filter: invert(63%) sepia(42%) saturate(558%) hue-rotate(125deg) brightness(96%) contrast(90%);
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
`;
