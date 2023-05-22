import { IconWrapper } from "@/components/NavStyles";
import { NavLinks } from "@/components/NavStyles";
import { LinkWrapper } from "@/components/NavStyles";
import Discord from "@/public/Discord";
import Github from "@/public/Git";
import Link from "next/link";
import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";

const HamburgerButton = styled.button`
  background: transparent;
  color: #fff;
  font-size: 2.2rem;
  border: none;
`;

const MenuContainer = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: #fff;
  border-radius: 8px 8px 0px 0px;
`;

const ContentContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  height: calc(50vh - 36px);
  border-radius: 8px 8px 0px 0px;
  background: #000;
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const transitions = useTransition(isOpen, {
    from: { transform: "translate3d(0, 100vh, 0)" },
    enter: { transform: "translate3d(0, 89vh, 0)" },
    leave: { transform: "translate3d(0, 100vh, 0)" },
    config: {
      tension: 210,
      friction: 20,
    },
  });

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&#x2715;</span> : <span>&#9870;</span>}
      </HamburgerButton>
      {transitions((style: any, item: any) =>
        item ? (
          <MenuContainer style={style}>
            <ContentContainer className="started-bg">
              <LinkWrapper>
                <NavLinks>
                  <Link href="/">Solutions</Link>
                  <Link href="/">Roadmap</Link>
                </NavLinks>
                <IconWrapper>
                  <Link href="https://github.com/devngeni" target="_blank">
                    <Github />
                  </Link>
                  <Link href="https://ngeni.substack.com/" target="_blank">
                    <Discord />
                  </Link>
                </IconWrapper>
              </LinkWrapper>
            </ContentContainer>
          </MenuContainer>
        ) : null
      )}
    </>
  );
};

export default HamburgerMenu;
