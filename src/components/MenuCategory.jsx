// import components
import MenuItem from "./MenuItem.jsx";

// import motion
import { motion } from "framer-motion";

// import variants
import { fadeIn } from "../variants.js";

function MenuCategory({ category }) {
  console.log(category);
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.6, 1.6)}
      initial="hidden"
      whileInView={"show"}
    >
      {category.map((item, index) => {
        const { name, menuItems, icon } = item;
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-8 mb-8"
          >
            <div className="flex justify-center items-center gap-4 mr-3">
              <div>{icon}</div>
              <h1 className="text-2xl">{name}</h1>
            </div>
            <MenuItem menuItems={menuItems} />
          </div>
        );
      })}
    </motion.div>
  );
}

export default MenuCategory;
