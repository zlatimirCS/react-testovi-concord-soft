const Menu = ({ items }) => {
  return (
    <main className="menu">
      {items.map((item) => {
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
