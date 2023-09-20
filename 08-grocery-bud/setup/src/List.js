import React from 'react';
import Article from './Article';
import { FaMask } from 'react-icons/fa';

const List = ({ hendleEdit, groceries, removeItem, clearList, message }) => {
  return (
    <div className='grocery-container'>
      {groceries.map((grocery) => {
        console.log(grocery);

        return (
          <Article
            grocery={grocery}
            removeItem={removeItem}
            message={message}
            hendleEdit={hendleEdit}
          />
        );
      })}

      <button className='clear-btn' onClick={clearList}>
        Clear list
      </button>
    </div>
  );
};

export default List;
