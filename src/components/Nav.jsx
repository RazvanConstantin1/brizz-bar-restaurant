import React from "react";

// import data
import { navData } from "../data.js";

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6 py-8">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
