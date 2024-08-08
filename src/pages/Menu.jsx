// import components

import Categories from "../components/Categories.jsx";
import Header from "../components/Header.jsx";
import MenuItem from "../components/MenuItem.jsx";

// import data
import { menuData } from "../data.js";

function Menu() {
  // destructure data
  const { menuItems } = menuData;

  return (
    <>
      <div className=" bg-pattern ">
        <Header />
        <div className="container mx-auto min-h-[980px] flex justify-center">
          <div className="mt-48 container mx-auto">
            <div className="flex flex-col">
              <p className="text-center text-accent-default text-3xl mb-8 mr-3">
                Menu
              </p>
              <Categories />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4">
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;

                return (
                  <MenuItem
                    key={index}
                    image={image}
                    name={name}
                    price={price}
                    description={description}
                  />
                );
              })}
            </div>
            {/* button */}
            <div className="flex justify-center mt-12">
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
