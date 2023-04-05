import React from 'react';
import List from './List';
import Form from './Form';
import Alert from './Alert';
import { useGlobalContext } from './context';

function App() {
  const { alert } = useGlobalContext();
  return (
    <section className='section-center'>
      {alert && <Alert />}
      <Form />
      <List />
    </section>
  );
}

export default App;
