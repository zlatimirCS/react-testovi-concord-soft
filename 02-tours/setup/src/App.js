import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const removeArticle = (id) => {
    const newData = toursData.filter((tour) => {
      return tour.id !== id;
    });
    setToursData(newData);
  };
  const dataFatch = async () => {
    setLoading(true); // za novi fetch nakon refresh
    try {
      const respns = await fetch(url);
      const tours = await respns.json();
      setLoading(false);
      setToursData(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    dataFatch();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (toursData.length === 0) {
    return (
      <main>
        <section>
          <div className='title'>
            <h1>No Tours Left</h1>

            <button className='refresh-btn' onClick={() => dataFatch()}>
              Refresh
            </button>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section>
        <div className='title'>
          <h1>Our Tours</h1>
          <span className='decorative'></span>
        </div>

        <Tours toursData={toursData} removeArticle={removeArticle} />
      </section>
    </main>
  );
}

export default App;
