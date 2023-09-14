import React from 'react';
import './loading.css';
import gif from './images/preloader.gif';
const Loading = () => {
  return (
    <div className='preloader'>
      <img src={gif} alt='Loading...' />
    </div>
  );
};

export default Loading;
