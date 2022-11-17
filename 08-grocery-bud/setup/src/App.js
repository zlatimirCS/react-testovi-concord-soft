import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");
  const [emptyAlert, setEmptyAlert] = useState(false);
  const [addedAlert, setAddedAlert] = useState(false);
  const [editAlert, setEditAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [clearAlert, setClearAlert] = useState(false);
  const handleSubmit = (e) => e.preventDefault();
  const onButtonClick = () => {
    if (!term) {
      console.log(term);
      setEmptyAlert(true);
      setTimeout(() => {
        setEmptyAlert(false);
      }, 3000);
    } else {
      setItems(() => [...items, { id: Math.random(), item: term }]);
      localStorage.setItem("items", JSON.stringify(items));

      setTerm("");
      setAddedAlert(true);
      setTimeout(() => {
        setAddedAlert(false);
      }, 3000);
    }
  };
  const handleInput = (e) => {
    setTerm(e.target.value);
  };
  const deleteItem = () => {};
  useEffect(() => {
    items.length !== 0 && localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem("items"));
    if (storageItems) {
      setItems(storageItems);
    }
  }, []);
  return (
    <section>
      {emptyAlert && <Alert />}
      <h2>grocery bud</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. eggs"
          onChange={handleInput}
          value={term}
        />
        <button onClick={onButtonClick}>Submit</button>
      </form>
      {items.length !== 0 && <List items={items} />}
    </section>
  );
}

export default App;
