import React from 'react';
import List from './List';
import Form from './Form';
import Alert from './Alert';
import { useGlobalContext } from './context';

function App() {
  const { alert, alertMessage } = useGlobalContext();
  return (
    <section className='section-center'>
      {alert && (
        <Alert message={alertMessage.message} alertType={alertMessage.type} />
      )}
      <Form />
      <List />
    </section>
  );
}

export default App;
