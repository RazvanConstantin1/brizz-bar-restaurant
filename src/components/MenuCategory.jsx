import MenuItem from "./MenuItem.jsx";

function MenuCategory({ category }) {
  console.log(category);
  return (
    <div>
      {category.map((item, index) => {
        const { name, menuItems, icon } = item;
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-8 mb-8"
          >
            <div className="flex justify-center items-center gap-4">
              <div>{icon}</div>
              <h1 className="text-2xl">{name}</h1>
            </div>
            <MenuItem menuItems={menuItems} />
          </div>
        );
      })}
    </div>
  );
}

export default MenuCategory;
