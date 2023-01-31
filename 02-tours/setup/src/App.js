import React, { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

export const ToursContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [tours, setTours] = useState([])

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    return setTours(data);
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [refetch]);

  const reFetch = () => {
    setRefetch(prevFetch => !prevFetch)
  }

  if(loading) {
    return <Loading />
  } else {
  return (
    tours.length > 0 ? (
    <ToursContext.Provider value={{tours, setTours}}>
      <main>
        <section>
          <div className="title">
            <h2>Our tours</h2>
            <div className="underline"></div>
          </div>
          <Tours />
        </section>
      </main>
    </ToursContext.Provider>
    ) : (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={reFetch}>refresh</button>
        </div>
      </main>
    )
  )}
}
export default App
