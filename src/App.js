import React from "react";
import { useState } from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Services from "./components/Services/Services";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(
      50.73deg,
      rgba(204, 0, 187, 0.15) 5%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 244, 255, 0.01) 50%,
      rgba(0, 244, 255, 0.20) 100%
    );
  width: 100%;
`;
const WrapperService = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 5%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 244, 255, 0.01) 50%,
      rgba(0, 244, 255, 0.20) 100%
    );
  width: 100%;
  padding-bottom:40px;
`;

const App = () => {
  // const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>

      <Navbar />
      <Body>
        <Hero />
        <WrapperService>
        <Services/>
        </WrapperService>
        
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>

        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
          <Education />
          <Contact />
        </Wrapper>
        <Footer />
   
      </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
