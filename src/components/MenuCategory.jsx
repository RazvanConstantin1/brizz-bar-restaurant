import MenuItem from "./MenuItem.jsx";

function MenuCategory({ category }) {
  console.log(category);
  return (
    <div>
      {category.map((item, index) => {
        const { name, menuItems, href } = item;
        console.log(href);
        return (
          <div
            id={href}
            key={index}
            className="flex flex-col justify-center items-center gap-8 mb-8"
          >
            <h1 className="text-2xl">{name}</h1>
            <MenuItem menuItems={menuItems} href={href} />
          </div>
        );
      })}
    </div>
  );
}

export default MenuCategory;
