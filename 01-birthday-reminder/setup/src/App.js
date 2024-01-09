import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [birthdays, setBirthdays] = useState(data);

	const clearAllHandler = () => {
		setBirthdays([]);
	};
	return (
		<main>
			<section className='container'>
				<h3>{birthdays.length} birthdays today</h3>
				{birthdays.map((birthday) => {
					return <List data={birthday} key={birthday.id} />;
				})}
				<button onClick={clearAllHandler}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
