import React from "react";
import { NavHashLink } from "react-router-hash-link";

// import data
import { navData } from "../data.js";

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6 py-8">
        {navData.map((item, index) => {
          return (
            <li key={index} className="w-full h-full">
              <NavHashLink
                smooth
                to={item.href}
                className="flex justify-center items-center text-xl capitalize font-primary italic hover:text-dark transition-all duration-300"
              >
                {item.name}
              </NavHashLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
