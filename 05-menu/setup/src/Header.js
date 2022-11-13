import Categories from "./Categories";

const Header = ({ setCategory }) => {
  return (
    <header className="header">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories setCategory={setCategory} />
    </header>
  );
};

export default Header;
