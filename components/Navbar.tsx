import Link from "next/link";
import {
  IconWrapper,
  Nav,
  LogoContainer,
  NavLinks,
  LinkWrapper,
  NavWrapper,
} from "./NavStyles";
import Image from "next/image";
import Favicon from "@/public/favicon";
import Discord from "@/public/Discord";
import Github from "@/public/Git";
import { useEffect, useState } from "react";
import HamburgerMenu from "@/commons/Hamburger";
export default function Navbar() {
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
    <Nav>
      <NavWrapper>
        <LogoContainer>
          <Favicon />
          NGENI AI
        </LogoContainer>
        {isSmallScreen ? (
          <HamburgerMenu />
        ) : (
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
        )}
      </NavWrapper>
    </Nav>
  );
}
