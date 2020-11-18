import React from "react";

import Calculator from "../components/Calculator";

import GlobalStyle, { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <GlobalStyle />
      <Calculator />
    </Container>
  );
};

export default Home;
