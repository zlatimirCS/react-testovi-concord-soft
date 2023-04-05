import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Item = ({ item, removeItem, toggleEdit }) => {
  return (
    <div className='grocery-item'>
      <p className='title'>{item.name}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={() => toggleEdit(item.id)}
        >
          {item.edit ? <FaEdit className='edit-btn-toggle' /> : <FaEdit />}
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={() => removeItem(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Item;
