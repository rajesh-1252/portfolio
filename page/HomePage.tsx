import Image from "next/image";
import Link from "next/link";
import React from "react";
import About from "./About";
import Wrappers from "../assets/css/Home.Wrappers";
import Skills from "./Skills";
import NavBar from "../components/NavBar";
import { socials } from "../utils/data/data";

const HomePage = () => {
  return (
    <Wrappers>
      <div id="home"></div>
      <div className="bg-img">
        <section className="intro">
          <h1 className="name">Madhan Rajesh</h1>
          <h3 className="profession">Full Stack Developer</h3>
          <div className="social-links">
            {socials.map((item) => {
              const { href, id, path } = item;
              return (
                <Link key={id} href={href} target={"_blank"}>
                  <Image src={path} width={50} height={50} alt={"socials"} />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </Wrappers>
  );
};

export default HomePage;
