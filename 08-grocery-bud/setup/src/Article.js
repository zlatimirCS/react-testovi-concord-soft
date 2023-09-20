import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const Article = ({ hendleEdit, grocery, removeItem }) => {
  console.log(grocery);
  const { id, name } = grocery;
  console.log(hendleEdit);
  return (
    <div className='grocery-list'>
      <article className='grocery-item' key={id}>
        <p className='title'>{name}</p>
        <div className='btn-container'>
          <button className='edit-btn' onClick={() => hendleEdit(id)}>
            <FaEdit />
          </button>
          <button className='delete-btn ' onClick={() => removeItem(id)}>
            <FaTrash />
          </button>
        </div>
      </article>
    </div>
  );
};

export default Article;
