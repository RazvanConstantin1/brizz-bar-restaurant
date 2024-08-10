import React, { useState, useEffect, useRef } from "react";
// import data
import { navData } from "../data.js";

// import components
import Nav from "./Nav.jsx";
import Socials from "./Socials.jsx";

// import Logo
import Logo from "../assets/img/header/logo.png";

// import motion
import { motion } from "framer-motion";

// import variants
import { staggerContainer, fadeIn, headerVariants } from "../variants.js";
import { NavLink, useLocation } from "react-router-dom";
import HamburgerButton from "./HamburgerButton.jsx";

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
          <HamburgerButton navRef={navRef} nav={nav} setNav={setNav}>
            {/* nav */}
            <Nav nav={nav} navData={navData} />
          </HamburgerButton>

          {/* logo */}
          <motion.div
            className="order-1 lg:order-none lg:ml-[10rem]"
            variants={fadeIn("down", "tween", 1.2, 1.4)}
          >
            <NavLink to="/brizz-bar-restaurant/" alt="">
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
