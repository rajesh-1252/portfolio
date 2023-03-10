import Image from "next/image";
import backgroundPrimary from "../public/backgroundPrimary.png";
import HomePage from "../page/HomePage";
import About from "../page/About";
import Experience from "../page/Experience";
import Skills from "../page/Skills";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../page/Contact";
import Project from "../page/Project";
import { useEffect } from "react";
export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
