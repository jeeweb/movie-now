import styled from "styled-components";
import Logo from "./Logo";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { IconFire, IconFireFilled } from "./Icons/IconFire";
import { IconPlaying, IconPlayingFilled } from "./Icons/IconPlaying";
import { IconSmile, IconSmileFilled } from "./Icons/IconSmile";

const HeaderBox = styled.header`
  position: fixed;
  left: 4vw;
  top: 4vh;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: fit-content;
  padding: 1em;
  border-radius: 1em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const NavItem = styled.li`
  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  svg {
    width: 22px;
    height: 22px;
  }
  span {
  }
`;
const ActiveMark = styled(motion.span)`
  position: absolute;
  left: -3px;
  top: -3px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #fff;
`;

function Header() {
  const popularMatch = useMatch("/");
  const comingSoonMatch = useMatch("/coming-soon");
  const nowPlayingMatch = useMatch("/now-playing");

  return (
    <HeaderBox>
      <Logo />
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">
              {popularMatch ? <IconFireFilled /> : <IconFire />}
              <span>POPULAR</span>
              {popularMatch && <ActiveMark layoutId="active" />}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/coming-soon">
              {/* {comingSoonMatch ? <IconStarFilled /> : <IconStar />} */}
              {comingSoonMatch ? <IconSmileFilled /> : <IconSmile />}
              <span>COMING SOON</span>
              {comingSoonMatch && <ActiveMark layoutId="active" />}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/now-playing">
              {nowPlayingMatch ? <IconPlayingFilled /> : <IconPlaying />}
              <span>NOW PLAYING</span>
              {nowPlayingMatch && <ActiveMark layoutId="active" />}
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderBox>
  );
}

export default Header;
