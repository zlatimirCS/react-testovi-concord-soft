import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, glass, image, info, name }) => {
	return (
		<article className='cocktail'>
			<div className='imgContainer'>
				<img src={image} alt={name} />
			</div>
			<div className='text-container'>
				<h4>{name}</h4>
				<h5>{glass}</h5>
				<p>{info}</p>
				<Link to={`/cocktail/${id}`} className='btn'>
					Details
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
