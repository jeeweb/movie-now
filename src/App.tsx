import styled from "styled-components";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";
import { motion } from "framer-motion";
import { theme } from "./theme";

const Wrapper = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  background: #0c071e;
  color: #fff;
  overflow-x: hidden;
`;

const Container = styled.div`
  padding-top: 36px;
  overflow-y: auto;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="16x16"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&family=Timmana&display=swap"
        />
        <title>MovieNOW</title>
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
