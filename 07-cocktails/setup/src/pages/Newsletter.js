import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const timeoutId = useRef(null);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email !== 'test@test.com') {
			toast.error('only test email allowed', {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		} else {
			toast.success('success check your email!', {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
			timeoutId.current = setTimeout(() => {
				history.push('/');
			}, 500);
		}
	};

	useEffect(() => {
		return () => {
			if (timeoutId.current) {
				clearTimeout(timeoutId.current);
			}
		};
	}, []);

	return (
		<form action='/newsletter' className='newsletterForm' onSubmit={handleSubmit}>
			<h4>Our newsletter</h4>
			<div className='form-control'>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' required />
			</div>
			<div className='form-control'>
				<label htmlFor='lastName'>Last Name</label>
				<input type='text' name='lastName' required />
			</div>
			<div className='form-control'>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className='form-control'>
				<button className='btn'>Submit</button>
			</div>
		</form>
	);
};

export default Newsletter;
