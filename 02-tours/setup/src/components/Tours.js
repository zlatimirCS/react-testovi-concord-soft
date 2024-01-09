import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTourHandler }) => {
	return (
		<section className='container'>
			<div className='title'>
				<h2>our tours</h2>
				<div className='underline'></div>
			</div>
			<section className='toursContainer'>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTourHandler={removeTourHandler} />;
				})}
			</section>
		</section>
	);
};

export default Tours;
