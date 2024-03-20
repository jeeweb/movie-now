import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { GlobalStyle } from "./Components/GlobalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  color: #fff;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  );
}
