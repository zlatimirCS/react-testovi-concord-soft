import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <section className="container">
        <div className="qwrap">
          <div className="title">
            <h2>Questions And Answers About Login</h2>
          </div>
          <div className="questions">
            {data.map(q => 
              <SingleQuestion key={q.id} question={q} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
