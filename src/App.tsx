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
  background: linear-gradient(135deg, #372155, #1e1543);
  color: #fff;
`;

const Container = styled.section`
  padding: calc(2em + 64px) 2em 2em;
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
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}
