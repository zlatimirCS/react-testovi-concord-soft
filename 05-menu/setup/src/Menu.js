import data from "./data.js";

const Menu = () => {
  return (
    <main className="menu">
      {data.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.img} alt={item.title} />
            <h4> {item.title} </h4>
            <p> {item.price} </p>
            <p> {item.desc} </p>
          </article>
        );
      })}
    </main>
  );
};

export default Menu;
