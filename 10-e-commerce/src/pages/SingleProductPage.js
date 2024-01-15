import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { Loading, ProductImages, AddToCart, Stars, PageHero } from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
	const params = useParams();
	const productID = params['id'];
	const {
		state: { single_product, single_product_loading },
		dispatch
	} = useProductsContext();
	const { id, name, price, description, stock, company, images, colors } = single_product;
	console.log('stock', stock);
	useEffect(() => {
		dispatch({ type: 'GET_SINGLE_PRODUCT_BEGIN' });
		const controller = new AbortController();
		const signal = controller.signal;

		const fetchData = async () => {
			const response = await fetch(`${url}${productID}`, { signal });
			const singleProduct = await response.json();
			dispatch({ type: 'GET_SINGLE_PRODUCT_SUCCESS', payload: singleProduct });
		};

		fetchData();

		return () => {
			controller.abort();
		};
	}, [productID, dispatch]);

	if (single_product_loading) {
		return (
			<>
				<Loading />
			</>
		);
	}

	return (
		<>
			<PageHero customText={name} />
			<Wrapper className='page'>
				<div className='section section-center'>
					<Link to='/products' className='btn'>
						back to products
					</Link>
					<div className='product-center'>
						<ProductImages images={images} />
						<section className='content'>
							<h2>{name}</h2>
							<Stars {...single_product} />
							<h5 className='price'>${formatPrice(price)}</h5>
							<p className='desc'>{description}</p>
							<p className='info'>
								<span>Available : </span>
								{stock > 0 ? 'In stock' : 'Out of stock'}
							</p>
							<p className='info'>
								<span>SKU : </span>
								{id}
							</p>
							<p className='info'>
								<span>Brand : </span>
								{company}
							</p>
							<hr />

							{stock > 0 && <AddToCart colors={colors} />}
						</section>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}

	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleProductPage;
