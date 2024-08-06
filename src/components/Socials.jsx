import React from "react";

// import data
import { socialData } from "../data.js";

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <a
            className="border rounded-full w-[35px] h-[35px] border-white/20 flex items-center justify-center text-sm hover:text-accent-default hover:border-accent transition-all"
            href={item.href}
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
