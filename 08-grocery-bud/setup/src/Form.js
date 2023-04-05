import { useState } from 'react';
import { useGlobalContext } from './context';
const Form = () => {
  const { items, addItem, editItem } = useGlobalContext();
  const [newItemName, setNewItemName] = useState('');

  let toggleEdit = false;
  if (items) {
    items.forEach((item) => {
      if (item.edit) {
        toggleEdit = true;
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form onSubmit={handleSubmit} className='grocery-form'>
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input
          type='text'
          className='grocery'
          value={newItemName}
          placeholder='e.g. eggs'
          onChange={(event) => setNewItemName(event.target.value)}
        />
        {toggleEdit ? (
          <button
            type='button'
            className='submit-btn'
            onClick={() => editItem(newItemName)}
          >
            edit
          </button>
        ) : (
          <button type='submit' className='submit-btn'>
            submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
