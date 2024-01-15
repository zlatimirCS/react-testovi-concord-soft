import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
	const productsContext = useProductsContext();
	const {
		state: { featured_products }
	} = productsContext;
	return (
		<Wrapper className='section'>
			<div className='title'>
				<h2>featured products</h2>
				<div className='title-underline'></div>
			</div>
			<div className='section-center featured'>{featured_products ? featured_products.map((product) => <Product key={product.id} {...product} />) : <Loading />}</div>
			<Link to='/products' className='btn'>
				all products
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--clr-grey-10);
	.featured {
		margin: 4rem auto;
		display: grid;
		gap: 2.5rem;
		img {
			height: 225px;
		}
	}
	.btn {
		display: block;
		width: 148px;
		margin: 0 auto;
		text-align: center;
	}
	@media (min-width: 576px) {
		.featured {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
`;

export default FeaturedProducts;
