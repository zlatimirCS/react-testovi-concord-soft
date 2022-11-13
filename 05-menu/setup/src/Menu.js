const Menu = ({ items }) => {
  return (
    <main className="menu">
      {items.map((item) => {
        return (
          <article key={item.id} className="meal">
            <img src={item.img} alt={item.title} />
            <div className="text">
              <div className="info">
                <h4> {item.title} </h4>
                <h4 className="price"> ${Math.ceil(item.price)} </h4>
              </div>
              <p className="desc"> {item.desc} </p>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Menu;
