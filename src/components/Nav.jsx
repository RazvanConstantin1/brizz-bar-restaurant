import React from "react";
import { NavHashLink } from "react-router-hash-link";

// import variants
import { navVariants } from "../variants.js";

// import framer
import { motion } from "framer-motion";

const Nav = ({ nav, navData }) => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate={nav ? "show" : ""}
      className="absolute bg-accent-default w-[310px] h-[75dvh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl"
    >
      <nav className="w-full h-full">
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 py-8">
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
    </motion.div>
  );
};

export default Nav;
