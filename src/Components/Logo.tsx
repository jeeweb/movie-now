import styled from "styled-components";
import { IconMovie } from "./Icons/IconMovie";

const LogoStyle = styled.h1`
  display: flex;
  align-items: baseline;
  gap: 0.06em;
  font-family: "Timmana";
  font-size: 1.6em;
  letter-spacing: 0.02em;
  svg {
    width: 28px;
    height: 28px;
  }
  span {
  }
`;

function Logo() {
  return (
    <LogoStyle>
      MovieN
      <IconMovie />W
    </LogoStyle>
  );
}

export default Logo;
