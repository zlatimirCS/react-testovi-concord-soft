import React, { useState } from 'react';
import Alert from './Alert';

const Form = ({ hendlSubmit, message, newInput, hendleInput, isEdit }) => {
  return (
    <form className='grocery-form' onSubmit={hendlSubmit}>
      {message && <Alert classs={message.css} text={message.text} />}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input
          type='text'
          id='grocery'
          className='"grocery'
          value={newInput}
          onChange={hendleInput}
        />
        <button type='submit' className='submit-btn'>
          {isEdit ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default Form;
