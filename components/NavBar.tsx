import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/NavBar.Wrappers";
import { navData } from "../utils/data/data";

const NavBar = () => {
  return (
    <Wrappers>
      <nav>
        <Link href="/" className="logo">
          MR.Madhan<span style={{ color: "var(--primary)" }}>.</span>
        </Link>
        <ul>
          {navData.map((item) => {
            const { id, href, content } = item;
            return (
              <li key={id}>
                <Link href={href}>
                  {content}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrappers>
  );
};

export default NavBar;
