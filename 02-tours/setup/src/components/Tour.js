import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTourHandler }) => {
	// const { id, name, info, image, price } = tour;

	const [showMoreToggle, setShowMoreToggle] = useState(false);

	return (
		<article className='singleTour'>
			<div className='imageContainer'>
				<img src={image} alt='Tour Image' />

				<div className='tourPrice'>
					<h3>${price}</h3>
				</div>
			</div>
			<div className='textContainer'>
				<h4>{name}</h4>
				<p>
					{showMoreToggle ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setShowMoreToggle((prevState) => !prevState)}>{showMoreToggle ? 'Show less' : 'Read more'}</button>
				</p>
				<button className='deleteBtn' onClick={() => removeTourHandler(id)}>
					not interested
				</button>
			</div>
		</article>
	);
};

export default Tour;
