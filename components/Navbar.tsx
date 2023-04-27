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
export default function Navbar() {
  return (
    <Nav>
      <NavWrapper>
        <LogoContainer>
          <Image src="/favicon.svg" alt="logo icon" width={30} height={30} />
          <span>NGENI AI</span>
        </LogoContainer>

        <LinkWrapper>
          <NavLinks>
            <Link href="/">Solutions</Link>
            <Link href="/">Roadmap</Link>
          </NavLinks>
          <IconWrapper>
            <Image src="/Git.svg" alt="git icon" width={22} height={22} />
            <Image src="/Ai.svg" alt="Ai icon" width={22} height={22} />
          </IconWrapper>
        </LinkWrapper>
      </NavWrapper>
    </Nav>
  );
}
