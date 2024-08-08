// import data
import { useState } from "react";
import { categoryData } from "../data.js";

function Categories() {
  // state to set the index
  const [curOpen, setCurOpen] = useState();

  return (
    <div className="flex justify-center items-center gap-2 text-xl sm:gap-8 mb-12 ">
      {categoryData.map((item, index) => {
        // destructure data
        const { icon, text } = item;
        // check if curOpen is = to index so that when other tab clicked the previous one closes
        let isActive = curOpen === index;

        return (
          <div
            key={index}
            className={`${
              isActive ? "activeTab" : ""
            } flex flex-col justify-center items-center p-2 text-md  cursor-pointer`}
            onClick={() => {
              setCurOpen(index);
            }}
          >
            <div>{icon}</div>
            <div>{text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
