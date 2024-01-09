import React from 'react';

const List = ({ data }) => {
	const { name, age, image } = data;
	return (
		<>
			<div className='listContainer'>
				<div className='imageContainer'>
					<img src={image} alt='person image' />
				</div>
				<div className='textContainer'>
					<h4>{name}</h4>
					<p>{age} years</p>
				</div>
			</div>
		</>
	);
};

export default List;
