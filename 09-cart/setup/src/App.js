import React from 'react';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  //loading from state/reduce
  const { loading } = useGlobalContext();
  //show loading massage ::
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  //show data::
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
