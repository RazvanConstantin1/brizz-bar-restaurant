import React from "react";

// import components
import Newsletter from "./Newsletter.js";
import Copyright from "./Copyright.js";
import Socials from "./Socials.js";

// import data
import { footerData } from "../data.js";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn, staggerContainer } from "../variants.js";

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20">
      <div className="container mx-auto h-full">
        {/* newsletter & info */}
        <div>
          {/* newsletter */}
          <div>
            <Newsletter />
          </div>
          {/* info */}
          <div>info</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
