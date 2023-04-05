import React from 'react';
import Item from './Item';
import { useGlobalContext } from './context';

const List = () => {
  const { items, removeItem, clearItems, toggleEdit } = useGlobalContext();

  return (
    <div className='grocery-container'>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleEdit={toggleEdit}
          />
        );
      })}
      <button className='clear-btn' onClick={() => clearItems()}>
        clear items
      </button>
    </div>
  );
};

export default List;
