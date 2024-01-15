import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
	const { state } = useCartContext();
	const { cart, shipping_fee } = state;
	const isShippingCharged = cart.some((item) => !item.shipping);
	const cartSubtotal = cart.reduce((total, cartItem) => {
		return (total += cartItem.amount * cartItem.price);
	}, 0);
	const totalPrice = formatPrice(cartSubtotal) + (isShippingCharged ? shipping_fee : 0);

	return (
		<Wrapper>
			<article>
				<h5>
					subtotal : <span>${formatPrice(cartSubtotal)}</span>
				</h5>
				<p>
					shipping fee : <span>${isShippingCharged ? shipping_fee : 0}</span>
				</p>
				<hr />
				<h4>
					order total : <span>${totalPrice.toFixed(2)}</span>
				</h4>
				<Link to='/checkout' className='btn'>
					Login
				</Link>
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	article {
		border: 1px solid var(--clr-grey-8);
		border-radius: var(--radius);
		padding: 1.5rem 3rem;
	}
	h4,
	h5,
	p {
		display: grid;
		grid-template-columns: 200px 1fr;
	}
	p {
		text-transform: capitalize;
	}
	h4 {
		margin-top: 2rem;
	}
	@media (min-width: 776px) {
		justify-content: flex-end;
	}
	.btn {
		width: 100%;
		margin-top: 1rem;
		text-align: center;
		font-weight: 700;
	}
`;

export default CartTotals;
