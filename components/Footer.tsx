import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/FooterWrapper";
import { socials } from "../utils/data/data";

const Footer = () => {
  return (
    <Wrappers>
      <div className="social-links">
        {socials.map((item) => {
          const { href, id, path } = item;
          return (
            <Link key={id} href={href} target={"_blank"} className="social-link">
              <Image src={path} width={30} height={30} alt={"socials"} />
            </Link>
          );
        })}
      </div>
      <p className="inspiration">
        Design and Engineering by Madhan Rajesh
      </p>
      <p className="rights">
        All Rights Reserved © {new Date().getFullYear()} • Senior Full Stack MERN Engineer
      </p>
    </Wrappers>
  );
};

export default Footer;
