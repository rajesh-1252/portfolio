import Link, { LinkProps } from "next/link";
import React from "react";
import Wrappers from "../assets/css/NavBar.Wrappers";
import { navData } from "../utils/data/data";

const NavBar = () => {
  const handleScroll = (e: any) => {
    const target = e.target.getAttribute("href");
    const temp = target.substring(2);
    const location = document.querySelector(temp);
    console.log(location);
  };
  return (
    <Wrappers>
      <div className="bg sticky">
        <nav>
          <ul>
            {navData.map((item) => {
              const { id, href, scroll, content } = item;
              return (
                <li key={id}>
                  <Link href={href} onClick={handleScroll} scroll={scroll}>
                    {content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Wrappers>
  );
};

export default NavBar;
