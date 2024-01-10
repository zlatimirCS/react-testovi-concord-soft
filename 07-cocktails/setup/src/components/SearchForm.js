import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const SearchForm = () => {
	const history = useHistory();
	const location = useLocation();

	const [searchTerm, setSearchTerm] = useState('');

	const { search, setSearch } = useGlobalContext();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const querySearchTerm = queryParams.get('search') || '';
		setSearchTerm(querySearchTerm);
		setSearch(querySearchTerm);
	}, [location]);

	const searchHandler = (e) => {
		e.preventDefault();
		setSearch(searchTerm);
		history.push(`/?search=${searchTerm}`);
	};

	return (
		<div className='formContainer'>
			<form action='get' onSubmit={searchHandler}>
				<input type='text' name='searchBar' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				<button className='btn'>Search</button>
			</form>
		</div>
	);
};

export default SearchForm;
