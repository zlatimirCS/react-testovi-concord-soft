import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
	const { state } = useFilterContext();
	const { grid_view, filtered_products } = state;

	return <>{grid_view ? <GridView products={filtered_products} /> : <ListView products={filtered_products} />}</>;
};

export default ProductList;
