import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}

	if (cocktails.length < 1) {
		return (
			<h4 className='section-title' style={{ textAlign: 'center', margin: '0 auto' }}>
				no matching cocktails founds...
			</h4>
		);
	}

	return (
		<div className='cocktail-container'>
			{cocktails.map((item) => {
				return <Cocktail key={item.id} {...item} />;
			})}
		</div>
	);
};

export default CocktailList;
