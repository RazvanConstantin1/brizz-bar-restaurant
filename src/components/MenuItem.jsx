function MenuItem({ menuItems }) {
  return (
    <div className="flex justify-center items-center gap-4">
      {menuItems.map((item, index) => {
        const { image, name, price, description } = item;
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300"
          >
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
        );
      })}
    </div>
  );
}

export default MenuItem;
