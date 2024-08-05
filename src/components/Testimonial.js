import React from "react";

// import components
import TestimonialCarousel from "../components/TestimonialCarousel.js";

// import data
import { testimonialData } from "../data.js";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants.js";

const Testimonial = () => {
  // destructure testimonial data
  const { title, subtitle, modelImg, slider } = testimonialData;

  return (
    <section className="relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px] bg-testimonial bg-cover bg-no-repeat">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 text-white">{title}</h2>
          <p className="text-white/70 capitalize mb-4">{subtitle}</p>
          <div className="mb-8">
            <img src={modelImg} alt="modelImg" />
          </div>
        </motion.div>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
