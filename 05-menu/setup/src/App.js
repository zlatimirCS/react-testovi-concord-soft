import React from 'react';
import data from './data';
import Categories from './Categories';
import Menu from './Menu';
import "./App.css";

function App() {
  return (
    <div>
      <div className='title'>
        <div><h1>Our menu</h1></div>
        <div className='line'></div>
      </div>
      <div className='menu'>
      <Menu items={data} />
      </div>
    </div>
  );
}

export default App;
