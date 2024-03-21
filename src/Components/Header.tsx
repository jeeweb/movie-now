import styled from "styled-components";
import Logo from "./Logo";
import { Link, useMatch } from "react-router-dom";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { IconFire, IconFireFilled } from "./Icons/IconFire";
import { IconPlaying, IconPlayingFilled } from "./Icons/IconPlaying";
import { IconSmile, IconSmileFilled } from "./Icons/IconSmile";

const HeaderBox = styled(motion.header)`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  width: 100%;
  max-height: 64px;
  padding: 0 2em;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  gap: 1em;
`;

const NavItem = styled(motion.li)`
  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.3em;
    padding: 20px 4px 20px 2px;
  }
  svg {
    width: 22px;
    height: 22px;
  }
  span {
    opacity: 0.5;
    transition: opacity 0.2s;
  }
  a:hover > *,
  .nav__active {
    opacity: 1;
  }
`;
const ActiveMark = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #f7ddf9;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 2px #b174cf, 0 0 4px #b174cf, 0 0 6px #b174cf;
`;

const headerVariants = {
  top: {
    borderBottom: "1px solid transparent",
  },
  scrolled: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  },
};

function Header() {
  const popularMatch = useMatch("/");
  const comingSoonMatch = useMatch("/coming-soon");
  const nowPlayingMatch = useMatch("/now-playing");
  const { scrollY } = useScroll();
  const headerAnimation = useAnimation();
  useMotionValueEvent(scrollY, "change", (y) => {
    console.log(y);
    if (y < 1) {
      headerAnimation.start("top");
    } else {
      headerAnimation.start("scrolled");
    }
  });
  return (
    <HeaderBox
      variants={headerVariants}
      initial="top"
      animate={headerAnimation}
    >
      <Logo />
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">
              {popularMatch ? <IconFireFilled /> : <IconFire />}
              <span className={popularMatch ? "nav__active" : ""}>POPULAR</span>
              {popularMatch && <ActiveMark layoutId="active" />}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/coming-soon">
              {/* {comingSoonMatch ? <IconStarFilled /> : <IconStar />} */}
              {comingSoonMatch ? <IconSmileFilled /> : <IconSmile />}
              <span className={comingSoonMatch ? "nav__active" : ""}>
                COMING SOON
              </span>
              {comingSoonMatch && <ActiveMark layoutId="active" />}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/now-playing">
              {nowPlayingMatch ? <IconPlayingFilled /> : <IconPlaying />}
              <span className={nowPlayingMatch ? "nav__active" : ""}>
                NOW PLAYING
              </span>
              {nowPlayingMatch && <ActiveMark layoutId="active" />}
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderBox>
  );
}

export default Header;
