import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, editItem, removeItem, clearList }) => {
  console.log(items);
  return (
    <div class="grocery-container">
      <div class="grocery-list">
        {items.map((item) => {
          const { id, title } = item;
          return (
            <article class="grocery-item" key={id}>
              <p class="title">{title}</p>
              <div class="btn-container">
                <button
                  type="button"
                  class="edit-btn"
                  onClick={() => {
                    editItem(id);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  class="delete-btn"
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button class="clear-btn" onClick={clearList}>
        clear items
      </button>
    </div>
  );
};

export default List;
