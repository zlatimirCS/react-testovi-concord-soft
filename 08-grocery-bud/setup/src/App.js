import React, { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';

//data from storage::
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function App() {
  //list::
  const [groceries, setGroceries] = useState(getLocalStorage());

  //for new input::
  const [newInput, setNewInput] = useState('');

  // alert::
  const [message, setMessage] = useState(null);

  // for index::
  const [editIndex, setEditIndex] = useState(null);

  //for button::
  const [isEdit, setEdit] = useState(false);

  // setTimeout::
  const setTime = () => {
    setTimeout(function () {
      setMessage({ css: '', text: '' });
    }, 2000);
  };
  //local storage ::
  function addLocalStorage(id, name) {
    const storageOb = { id, name };
    const itemsStorage = getLocalStorage();
    itemsStorage.push(storageOb);
    localStorage.setItem('list', JSON.stringify(itemsStorage));
  }

  function removeLocalStorage(id) {
    let itemsStorage = getLocalStorage();
    itemsStorage = itemsStorage.filter((item) => item.id !== id);
    localStorage.setItem('list', JSON.stringify(itemsStorage));
  }

  function changeLocalStorage(index, editValue) {
    let itemsStorage = getLocalStorage();
    itemsStorage = itemsStorage.map((item) => {
      if (item.id !== index) {
        item.value = editValue;
      }
      return item;
    });

    localStorage.setItem('list', JSON.stringify(itemsStorage));
  }

  //form::
  const hendlSubmit = (e) => {
    e.preventDefault();
    if (!newInput) {
      setMessage({ css: 'danger', text: 'There is no grocery to add' });
      setTime();
      return;
    }
    if (editIndex !== null) {
      const updatedGroceries = groceries.map((item, index) =>
        index === editIndex ? { ...item, name: newInput } : item
      );
      setGroceries(updatedGroceries);
      changeLocalStorage(editIndex, newInput);
      setEditIndex(null);
      setMessage({ css: 'success', text: 'Grosery changed' });
      setNewInput('');
      setTime();
      return;
    } else {
      addGrocery(newInput);
    }
    setNewInput('');
    setMessage({ css: 'success', text: 'Adedd grosery' });
    setTime();
  };

  // edit::
  const hendleEdit = (id) => {
    const editItem = groceries.find((item) => item.id === id);
    setEditIndex(groceries.indexOf(editItem));
    setNewInput(editItem.name);
    setEdit(true);
  };

  //input::
  const hendleInput = (e) => {
    setNewInput(e.target.value);
  };

  // add new item from input ::
  const addGrocery = (grocery) => {
    const newOB = {
      name: grocery,
      id: Date.now(),
    };
    addLocalStorage(newOB.id, newOB.name);
    setGroceries([...groceries, newOB]);
  };

  //remove::
  const removeItem = (id) => {
    const newGroceries = groceries.filter((grocery) => grocery.id !== id);
    setGroceries(newGroceries);
    removeLocalStorage(id);
    setMessage({ css: 'danger', text: 'Deleted grosery' });
    setTime();
  };

  //clear::
  const clearList = () => {
    setGroceries([]);
    localStorage.removeItem('list');
    setMessage({ css: 'danger', text: 'Deleted All items' });
    setTime();
  };

  return (
    <section className='section-center'>
      <Form
        addGrocery={addGrocery}
        hendlSubmit={hendlSubmit}
        message={message}
        newInput={newInput}
        hendleInput={hendleInput}
        isEdit={isEdit}
      />
      <List
        groceries={groceries}
        removeItem={removeItem}
        clearList={clearList}
        message={message}
        hendleEdit={hendleEdit}
      />
    </section>
  );
}

export default App;
