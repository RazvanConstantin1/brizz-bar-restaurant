// import motion
import { motion } from "framer-motion";

function HamburgerButton({ navRef, nav, setNav, children }) {
  return (
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
      {children}
    </motion.button>
  );
}

export default HamburgerButton;
