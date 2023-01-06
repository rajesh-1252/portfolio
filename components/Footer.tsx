import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/FooterWrapper";
import { socials } from "../utils/data/data";

const Footer = () => {
  return (
    <Wrappers>
      <p className="title">Find me on social media</p>
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
      <p className="inspiration">
        Design inspired from
        <span>
          <a
            href="https://www.figma.com/community/file/1006095821656678611"
            target="_blank"
            rel="noreferrer"
          >
            Akhil T J Portfolio Mockup Design
          </a>
        </span>
      </p>
      <p className="rights">
        All Rights Reserved © 2023
        <span>
          <a href=""> Privacy Policy</a>
        </span>
      </p>
    </Wrappers>
  );
};

export default Footer;
