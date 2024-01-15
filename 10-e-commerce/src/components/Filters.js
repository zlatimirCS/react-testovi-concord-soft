import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
	const { state, dispatch } = useFilterContext();
	const {
		all_products,
		filters: { category: filterCategory, price, max_price, text, shipping }
	} = state;
	const categories = getUniqueValues(all_products, 'category');
	const companies = getUniqueValues(all_products, 'company');
	const colors = [...new Set(all_products.map((product) => product.colors).flat())];

	const handleDispatch = (action, data) => {
		const { name, value } = data;
		if (action === 'UPDATE_FILTERS') {
			dispatch({ type: action, payload: { name, value } });
			dispatch({ type: 'FILTER_PRODUCTS' });
			dispatch({ type: 'SORT_PRODUCTS' });
			return;
		}
		dispatch({ type: action });
		dispatch({ type: 'FILTER_PRODUCTS' });
		dispatch({ type: 'SORT_PRODUCTS' });
	};

	return (
		<Wrapper>
			<div className='content'>
				<form onSubmit={(e) => e.preventDefault()}>
					<div className='form-control'>
						<input type='text' name='text' value={text} placeholder='search' className='search-input' onChange={(e) => handleDispatch('UPDATE_FILTERS', { name: 'text', value: e.target.value })} />
					</div>

					<div className='form-control'>
						<h5>category</h5>
						<div>
							{categories.map((category, index) => {
								return (
									<button key={index} className={filterCategory === category ? 'active' : ''} type='button' onClick={() => handleDispatch('UPDATE_FILTERS', { name: 'category', value: category })}>
										{category}
									</button>
								);
							})}
						</div>
					</div>

					<div className='form-control'>
						<h5>company</h5>
						<select name='company' id='company' className='company' onChange={(e) => handleDispatch('UPDATE_FILTERS', { name: 'company', value: e.target.value })}>
							{companies.map((company, index) => {
								return (
									<option key={index} value={company}>
										{company}
									</option>
								);
							})}
						</select>
					</div>

					<div className='form-control'>
						<h5>colors</h5>
						<div className='colors'>
							<button onClick={() => handleDispatch('UPDATE_FILTERS', { name: 'color', value: 'all' })} className={state.filters.color === 'all' ? 'all-btn active' : 'all-btn'}>
								all
							</button>
							{colors.map((color, index) => {
								return (
									<button key={index} className={state.filters.color === color ? 'color-btn active' : 'color-btn'} style={{ background: color }} onClick={() => handleDispatch('UPDATE_FILTERS', { name: 'color', value: color })}>
										{state.filters.color === color ? <FaCheck /> : null}
									</button>
								);
							})}
						</div>
					</div>

					<div className='form-control'>
						<h5>price</h5>
						<p className='price'>${formatPrice(price === 0 ? max_price : price)}</p>
						<input
							type='range'
							name='price'
							min={0}
							max={max_price}
							value={price === 0 ? max_price : price}
							step={1}
							id='price'
							className='price'
							onChange={(e) => handleDispatch('UPDATE_FILTERS', { name: 'price', value: e.target.value })}
						/>
					</div>

					<div className='form-control shipping'>
						<label htmlFor='shipping'>free shipping</label>
						<input type='checkbox' checked={shipping} name='shipping' id='shipping' onChange={(e) => handleDispatch('UPDATE_FILTERS', { name: 'shipping', value: e.target.checked })} />
					</div>
				</form>
				<button type='button' className='clear-btn' onClick={() => handleDispatch('CLEAR_FILTERS', '')}>
					clear filters
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
	}
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.search-input::placeholder {
		text-transform: capitalize;
	}

	button {
		display: block;
		margin: 0.25em 0;
		padding: 0.25rem 0;
		text-transform: capitalize;
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
	.active {
		border-color: var(--clr-grey-5);
	}
	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
	}
	.colors {
		display: flex;
		align-items: center;
	}
	.color-btn {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.5rem;
			color: var(--clr-white);
		}
	}
	.all-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}
	.all-btn .active {
		text-decoration: underline;
	}
	.price {
		margin-bottom: 0.25rem;
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		text-transform: capitalize;
		column-gap: 0.5rem;
		font-size: 1rem;
	}
	.clear-btn {
		background: var(--clr-red-dark);
		color: var(--clr-white);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`;

export default Filters;
