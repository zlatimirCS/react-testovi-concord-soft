import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className='errorContainer'>
			<img src='https://react-vite-projects-17-cocktails.netlify.app/assets/not-found-076062c6.svg' alt='error page' />
			<h3>Ohh!</h3>
			<p>We can't seem to find page you are looking for</p>
			<Link to='/' className='btn'>
				Back Home
			</Link>
		</div>
	);
};

export default Error;
