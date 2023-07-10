import React, { useState } from "react";
import Alert from "./Alert";
import "./List.css";

const List = () => {
  const [grocery, setGrocery] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [alert, setAlert] = useState(null);

  const handleDelete = (index) => {
    const deletedGrocery = groceries[index];
    const updatedGroceries = groceries.filter((item, i) => i !== index);
    setGroceries(updatedGroceries);
    if (editIndex === index) {
      setEditIndex(-1);
    }
    setAlert({ type: "danger", message: `Deleted grocery item: ${deletedGrocery}` });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setGrocery(groceries[index]);
  };

  const deleteGroceries = () => {
    setGroceries([]);
    setAlert({ type: "danger", message: "Deleted Groceries" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex > -1) {
      const updatedGroceries = [...groceries];
      updatedGroceries[editIndex] = grocery;
      setGroceries(updatedGroceries);
      setEditIndex(-1);
      setAlert({ type: "success", message: "Grocery item updated successfully!" });
    } else {
      if (grocery.trim() === "") {
        setAlert({ type: "danger", message: "Please enter a valid grocery item!" });
      } else {
        setGroceries([...groceries, grocery]);
        setAlert({ type: "success", message: "Grocery item added successfully!" });
      }
    }
    setGrocery("");
  };

  return (
    <div className="groceries">
      {alert && <Alert type={alert.type} message={alert.message} />}
      <h1>Grocery Bud</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="grocery"
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
        />
        <button className="submitButton" type="submit">{editIndex > -1 ? "Edit" : "Add"}</button>
      </form>
      <div>
        {groceries.map((item, index) => (
          <div className="items" key={index}>
            <p>{item}</p>
            <button  className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </div>
      <button className="delete-btn" onClick={deleteGroceries}>Clear All</button>
    </div>
  );
};

export default List;
