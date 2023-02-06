import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = (props) => {
    let articles = props.articles;
    let output = articles.map((a) => {
      return (
        <article key={a.id} className="grocery-item">
          <p className="title">{a.title}</p>
          <div className="btn-container">
            <button type="button" className="edit-btn" onClick={() => {
              props.onEdit(a.id)
            }}>
              <FaEdit />
            </button>
            <button type="button" className="delete-btn" onClick={() => {
              props.onRemove(a.id)
            }}>
              <FaTrash />
            </button>
          </div>
        </article>
      );
    });

    return output;
};

export default List;
