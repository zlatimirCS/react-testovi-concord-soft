import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const SearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [focused, setFocused] = useState(false);

	const history = useHistory();
	const location = useLocation();

	const { setSearch } = useGlobalContext();

	const timeoutId = useRef(null);
	const inputField = useRef(null);

	const onFocus = () => setFocused(true);
	const onBlur = () => setFocused(false);

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const querySearchTerm = queryParams.get('search') || '';
		setSearchTerm(querySearchTerm);
		setSearch(querySearchTerm);
	}, [location, setSearch]);

	const searchHandler = (e) => {
		e.preventDefault();
		setSearch(searchTerm);
		history.push(`/?search=${searchTerm}`);
	};

	const deleteSearchInputHandler = () => {
		setSearchTerm('');
		timeoutId.current = setTimeout(() => {
			inputField.current.focus();
		}, 0);
	};

	useEffect(() => {
		return () => {
			if (timeoutId.current) {
				clearTimeout(timeoutId.current);
			}
		};
	}, []);

	return (
		<div className='formContainer'>
			<form action='get' onSubmit={searchHandler}>
				<div className='searchContainer'>
					<input type='text' name='searchBar' placeholder=' ' onFocus={onFocus} onBlur={onBlur} ref={inputField} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
					<button type='button' onMouseDown={deleteSearchInputHandler} className={`deleteSearchInput ${focused && searchTerm !== '' && 'active'}`}>
						&times;
					</button>
				</div>

				<input className='btn submit' type='submit' value='Search' />
			</form>
		</div>
	);
};

export default SearchForm;
