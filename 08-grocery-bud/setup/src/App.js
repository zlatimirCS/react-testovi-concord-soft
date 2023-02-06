import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: "", type: "" });
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem("articles") || "[]")
  );
  const [keyword, setKeyword] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [tout, setTout] = useState(null);

  const inputElement = useRef();

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
    inputElement.current.focus();
  }, [JSON.stringify(articles)]);

  const generateAlarm = (al) => {
    switch (al) {
      case "added":
        setAlertMessage({
          message: "Item added!",
          type: "alert-success",
        });
        break;
      case "removed":
        setAlertMessage({
          message: "Item removed!",
          type: "alert-danger",
        });
        break;
      case "cleared":
        setAlertMessage({
          message: "List cleared!",
          type: "alert-danger",
        });
        break;
      case "empty":
        setAlertMessage({
          message: "Field is empty!",
          type: "alert-danger",
        });
        break;
      case "edited":
        setAlertMessage({
          message: "Item edited!",
          type: "alert-success",
        });
        break;
      default:
    }

    setAlert(true);

    clearTimeout(tout);
    setTout(
      setTimeout(() => {
        setAlert(false);
      }, 3000)
    );
  };

  const uuid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (keyword) {
      const eItem = articles.find((a) => a.id === editItem);
      let arts = articles || [];

      if (eItem) {
        arts.forEach((a) => {
          if (a.id === eItem.id) {
            a.title = keyword;
          }
        });
        generateAlarm("edited");
      } else {
        arts.push({ title: keyword, id: uuid() });
        generateAlarm("added");
      }
      setArticles(arts);
      setEditItem(null);
      setKeyword("");
      inputElement.current.focus();
    } else {
      generateAlarm("empty");
    }
  };

  const onEdit = (id) => {
    const item = articles.find((it) => it.id === id);
    inputElement.current.value = item.title;
    setEditItem(item.id);
    setKeyword(item.title);
    inputElement.current.focus();
  };

  const onRemove = (id) => {
    const remove = articles.filter((item) => item.id !== id);
    setArticles(remove);
    generateAlarm("removed");
  };

  const onClearAll = () => {
    setArticles([]);
    generateAlarm("cleared");
    setEditItem(null);
    setKeyword("");
    inputElement.current.focus();
  };

  const onChange = (value) => {
    setKeyword(value);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmit}>
        {alert && (
          <Alert message={alertMessage.message} alertType={alertMessage.type} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            ref={inputElement}
            className="grocery"
            placeholder="e.g. eggs"
            name="item"
            id="item"
            value={keyword || ""}
            onChange={(e) => onChange(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editItem ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <div className="grocery-list">
          <List articles={articles} onEdit={onEdit} onRemove={onRemove} />
        </div>
        {articles.length > 0 ? (
          <button className="clear-btn" onClick={onClearAll}>
            clear items
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default App;
