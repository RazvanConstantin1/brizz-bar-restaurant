// import components
import Header from "../components/Header.jsx";

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
            <p className="text-center text-red-600 mb-12">Menu</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4">
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;

                return (
                  <div className="">
                    <div className="flex flex-col justify-center items-center w-[100%]">
                      {/* image */}
                      <div className="flex-1">
                        <img src={image} alt="food" />
                      </div>
                      {/* name */}
                      <div className="text-xl font-semibold text-dark xl:text-2xl">
                        {name}
                      </div>
                      {/* description */}
                      <div className="text-center">{description}</div>
                      {/* price */}
                      <div className="my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent-default font-semibold">
                        {price}
                      </div>
                    </div>
                  </div>
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
