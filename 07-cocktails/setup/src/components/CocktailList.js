import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}
	return (
		<div className='cocktail-container'>
			{cocktails.length < 1 && <h4 className='section-title'>No matching cocktails found...</h4>}
			{cocktails.map((item) => {
				return <Cocktail key={item.id} {...item} />;
			})}
		</div>
	);
};

export default CocktailList;
