import React from "react";
// import data
import { heroData } from "../data.js";
// import components
import Header from "./Header.jsx";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn, staggerContainer } from "../variants.js";

const Hero = () => {
  // destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section id="#hero" className="bg-hero bg-cover bg-center">
      {/* Header */}
      {/* <Header /> */}
      <div className="container backdrop-brightness-[.35] mx-auto min-h-[980px] flex justify-center items-center">
        {/* text */}
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center"
        >
          {/* pretitle */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1"
          >
            {pretitle}
          </motion.div>

          {/* title */}
          <motion.h1 className="h1 mb-5 text-accent-default">{title}</motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="text-white max-w-[540px] mb-8"
          >
            {subtitle}
          </motion.p>

          {/* button */}
          <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
            <button className="btn">{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
