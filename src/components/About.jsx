import React from "react";

// import data
import { aboutData } from "../data.js";

// import motion
import { motion } from "framer-motion";

// import variants
import { plateVariants, staggerContainer, fadeIn } from "../variants.js";

const About = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section id="about" className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px] mt-4">
        {/* text and image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn capitalize mx-auto lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[300px] z-10 min-h-[250px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          >
            <img src={image} alt="pizza" className="w-[500px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
