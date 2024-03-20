import styled from "styled-components";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";
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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&family=Timmana&display=swap"
        />
        <title>Movie NOW</title>
      </Helmet>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  );
}
