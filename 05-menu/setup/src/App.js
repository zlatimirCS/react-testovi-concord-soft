import { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import Header from "./Header";

function App() {
  const [category, setCategory] = useState("all");
  const filteredItems = items.filter((item) => {
    return item.category === category || (category === "all" && true);
  });
  return (
    <div className="app">
      <Header setCategory={setCategory} />
      <Menu items={filteredItems} />
    </div>
  );
}

export default App;
