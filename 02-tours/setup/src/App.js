import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchTours = async (signal) => {
		setLoading(true);

		try {
			const response = await fetch(url, { signal });
			const tours = await response.json();
			setTours(tours);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		fetchTours(signal);

		return () => {
			controller.abort();
		};
	}, []);

	const removeTourHandler = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	if (tours.length === 0 && !loading) {
		return (
			<main>
				{loading && <Loading />}
				<h2>No Tours Left</h2>
				<button onClick={() => fetchTours()}>Refresh</button>
			</main>
		);
	}

	return <main>{loading ? <Loading /> : <Tours tours={tours} removeTourHandler={removeTourHandler} />}</main>;
}

export default App;
