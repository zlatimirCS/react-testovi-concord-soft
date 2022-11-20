import { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [term, setTerm] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [toEditItem, setToEditItem] = useState(null);

  const handleSubmit = (e) => e.preventDefault();

  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const onButtonClick = (action, ...args) => {
    switch (true) {
      case (action === "submit" && !term) || (action === "edit" && !term):
        showAlert(true, "please enter value", "danger");
        break;
      case action === "submit":
        showAlert(true, "item added to the list", "success");
        setItems(() => [...items, { id: Math.random(), item: term }]);
        localStorage.setItem("items", JSON.stringify(items));
        setTerm("");
        break;
      case action === "edit":
        showAlert(true, "value changed", "success");
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
        showAlert(true, "item is removed", "danger");
        const newItems = items.filter((item) => {
          return item.id !== args[0];
        });
        setItems(newItems);
        break;
      case action === "clear":
        showAlert(true, "empty list", "danger");
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
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <h3 className="main-title">grocery bud</h3>
      <form onSubmit={handleSubmit} className="form-control">
        <input
          type="text"
          placeholder="e.g. eggs"
          onChange={handleInput}
          value={term}
          className="grocery"
        />
        {toEditItem ? (
          <button onClick={() => onButtonClick("edit")} className="submit-btn">
            Edit
          </button>
        ) : (
          <button
            onClick={() => onButtonClick("submit")}
            className="submit-btn"
          >
            Submit
          </button>
        )}
      </form>
      {items.length !== 0 && (
        <List items={items} onButtonClick={onButtonClick} />
      )}
    </section>
  );
}

export default App;
