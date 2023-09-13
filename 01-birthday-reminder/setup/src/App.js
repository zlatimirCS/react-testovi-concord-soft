import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [persons, setPersons] = useState(data);
  console.log(persons);
  return (
    <main>
      <section>
        <h3>{persons.length} birthdays today</h3>
        <List persons={persons}></List>

        <button className='btn' onClick={() => setPersons([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
