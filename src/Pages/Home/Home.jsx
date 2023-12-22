import React from "react";
import Navbar from "../../Components/Navbar";
import { Box, Center } from "@chakra-ui/react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import GithubStats from "../Skills/GithubStats";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Box w="100%">
        <About/>
        <Skills/>
        <GithubStats/>
        <Projects/>
        <Center>
        <Contact/>
        </Center>
      </Box>
    </div>
  );
}