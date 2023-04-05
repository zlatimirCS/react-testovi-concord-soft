import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(localStorage.getItem('list'));
    } else {
      list = [];
    }
    return list;
  };

  const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };
  const [items, setItems] = useState(getLocalStorage());
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ message: '', type: '' });
  const [tout, setTout] = useState(null);
  const generateAlarm = (al) => {
    switch (al) {
      case 'added':
        setAlertMessage({
          message: 'Item is added!',
          type: 'alert-success',
        });
        break;
      case 'removed':
        setAlertMessage({
          message: 'Item is removed!',
          type: 'alert-danger',
        });
        break;
      case 'cleared':
        setAlertMessage({
          message: 'List is cleared!',
          type: 'alert-danger',
        });
        break;
      case 'edited':
        setAlertMessage({
          message: 'Item/Items is/are edited!',
          type: 'alert-success',
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
  const clearItems = () => {
    setItems(localStorage.clear());
    setItems(getLocalStorage());
    generateAlarm('cleared');
  };

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      edit: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    generateAlarm('added');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    generateAlarm('removed');
  };

  const editItem = (itemName) => {
    const newItems = items.map((item) => {
      if (item.edit) {
        const newItem = { ...item, name: itemName };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    generateAlarm('edited');
  };

  const toggleEdit = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, edit: !item.edit };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        alert,
        alertMessage,
        addItem,
        editItem,
        removeItem,
        toggleEdit,
        clearItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
