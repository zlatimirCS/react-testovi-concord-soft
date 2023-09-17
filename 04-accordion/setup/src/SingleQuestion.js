import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './index.css';
const SingleQuestion = (question) => {
  const { id, title, info } = question;
  const [isShow, setShow] = useState(false);
  return (
    <article key={id}>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShow(!isShow)}>
          {isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isShow && <p className='info'>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
