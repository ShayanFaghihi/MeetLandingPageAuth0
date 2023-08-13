import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Separator from "../components/Separator";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Separator sectionNumber="01" />
        <Main />
        <Separator sectionNumber="02" />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
