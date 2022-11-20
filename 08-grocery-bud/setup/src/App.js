import { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [term, setTerm] = useState("");
  const [alert, setAlert] = useState(false);
  const [toEditItem, setToEditItem] = useState(null);

  const handleSubmit = (e) => e.preventDefault();

  let timer = useRef(null);
  const parentFunction = () => {
    const runTimer = () => {
      timer.current = setTimeout(() => {
        setAlert(false);
      }, 3000);
    };
    runTimer();

    return () => {
      setAlert(true);
      runTimer();
    };
  };

  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  const onButtonClick = (action, ...args) => {
    switch (true) {
      case action === "submit" && !term:
      case action === "edit" && !term:
        parentFunction()();
        break;
      case action === "submit":
        setItems(() => [...items, { id: Math.random(), item: term }]);
        localStorage.setItem("items", JSON.stringify(items));
        setTerm("");
        break;
      case action === "edit":
        const editedItems = [...items];
        const index = editedItems.findIndex(
          (item) => item.id === toEditItem.id
        );
        editedItems[index].item = term;
        setItems(editedItems);
        setTerm("");
        setToEditItem(null);
        break;
      case action === "toEdit":
        const filteredToEdit = items.filter((item) => {
          return item.id === args[0];
        });
        setToEditItem(filteredToEdit[0]);
        setTerm(filteredToEdit[0].item);
        break;
      case action === "delete":
        const newItems = items.filter((item) => {
          return item.id !== args[0];
        });
        setItems(newItems);
        break;
      case action === "clear":
        setItems([]);
        break;
      default:
        console.log("A button is clicked!");
    }
  };
  const isMounted = useRef(false);
  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem("items")) || [];
    if (storageItems) {
      setItems(storageItems);
    }
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("items", JSON.stringify(items || []));
    } else {
      isMounted.current = true;
    }
  }, [items]);
  return (
    <section>
      {alert && <Alert />}
      <h2>grocery bud</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. eggs"
          onChange={handleInput}
          value={term}
        />
        {toEditItem ? (
          <button onClick={() => onButtonClick("edit")}>Edit</button>
        ) : (
          <button onClick={() => onButtonClick("submit")}>Submit</button>
        )}
      </form>
      {items.length !== 0 && (
        <List items={items} onButtonClick={onButtonClick} />
      )}
    </section>
  );
}

export default App;
