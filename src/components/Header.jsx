import React, { useState, useEffect, useRef } from "react";

// import components
import Nav from "./Nav.jsx";
import Socials from "./Socials.jsx";

// import Logo
import Logo from "../assets/img/header/logo.png";

// import motion
import { motion } from "framer-motion";

// import variants
import { staggerContainer, fadeIn } from "../variants.js";
import { NavLink, useLocation } from "react-router-dom";

const headerVariants = {
  hidden: {
    padding: "64px 0 64px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    stiffness: 80,
  },
};

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // nav state
  const [nav, setNav] = useState(false);

  // nav reference to close when clicked outside
  const navRef = useRef();

  // render header conditionally based on route path
  const location = useLocation();

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // close nav after click and also when clicked outside
  useEffect(() => {
    function handler(event) {
      if (!navRef.current?.contains(event.target)) {
        setNav(false);
      }
    }

    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, [setNav]);

  // TODO: solve the header bug when change the page

  return (
    <motion.header
      variants={headerVariants}
      // render header conditionally based on routing address
      initial={location.pathname === "/home" ? "hidden" : "show"}
      animate={isActive ? "show" : ""}
      className="bg-pink-200 fixed w-full max-w-[1800px] z-50 py-4"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate={"show"}
        className="mx-auto container"
      >
        <div className="flex justify-between items-center px-4 lg:px-0 relative text-white">
          {/* menu button */}
          <motion.button
            ref={navRef}
            onClick={() => setNav(!nav)}
            className={`${
              nav ? "gap-y-0" : "gap-y-2"
            } flex flex-col items-center justify-center w-12 h-12 p-4 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
          >
            {/* bar 1*/}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: nav ? -45 : 0,
                translateY: nav ? 2 : 0,
              }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
            {/* bar 2*/}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: nav ? 45 : 0,
              }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
            {/* nav */}
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate={nav ? "show" : ""}
              className="absolute bg-accent-default w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl"
            >
              <Nav />
            </motion.div>
          </motion.button>
          {/* logo */}
          <motion.div
            className="order-1 lg:order-none lg:ml-[10rem]"
            variants={fadeIn("down", "tween", 1.2, 1.4)}
          >
            <NavLink to="/home" alt="">
              {/* if header is active make logo 95 x 95 else 105 x 105 */}
              <img
                className={`${
                  isActive ? "w-[95px] h-[95px]" : "w-[105px] h-[105px]"
                }`}
                src={Logo}
                alt=""
              />
            </NavLink>
          </motion.div>
          {/* social icons */}
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
