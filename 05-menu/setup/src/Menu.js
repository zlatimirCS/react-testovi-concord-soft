import data from "./data.js";

const Menu = () => {
  return (
    <main className="menu">
      {data.map((item) => {
        return <img src={item.img} alt={item.title} />;
      })}
    </main>
  );
};

export default Menu;
