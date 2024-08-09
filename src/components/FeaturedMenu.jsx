import React from "react";

// import data
import { menuData } from "../data.js";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn, staggerContainer } from "../variants.js";

const FeaturedMenu = () => {
  // destructure menu data

  const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  console.log(menuItems);
  return (
    <section id="featuredMenu" className="bg-accent-default min-h-[780px]">
      {/* background */}
      <div className="h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0"></div>
      {/* text */}
      <div className="relative z-10 top-44">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize text-white max-w-[400px] text-center"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={("down", "tween", 0.4, 1.6)}
            className="text-white/70 capitalize mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.6, 1.6)}>
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className="relative top-96"
      >
        <div className="container mx-auto">
          <div className="lg: -mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
            {/* grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px]">
              {menuItems.map((item, index) => {
                // destructure item
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className="flex flex-col h-full">
                      {/* image */}
                      <div
                        className={`w-[100%] md:w-auto ${
                          index === 1 || index === 3
                            ? "lg:order-1"
                            : "order-none"
                        }`}
                      >
                        <img className="w-[100%]" src={image} alt="food" />
                      </div>
                      <div>
                        {/* text */}
                        <div className="bg-[#fff3e4] flex-1 flex-col justify-center px-6 lg:p-12 h-auto ">
                          <div className="text-center">
                            <div className="text-xl font-semibold text-dark xl:text-2xl">
                              {name}
                            </div>
                            <div className="my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent-default font-semibold">
                              {price}
                            </div>
                            <div>{description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn mx-auto capitalize mb-8">{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedMenu;
