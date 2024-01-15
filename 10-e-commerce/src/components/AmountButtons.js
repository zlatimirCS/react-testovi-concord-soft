import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const AmountButtons = ({ cartPage, amount, id, stock }) => {
	const { dispatch } = useCartContext();

	const addQuantityHander = (cartPage, value) => {
		if (!cartPage && value === 'dec') {
			dispatch({ type: 'DEFAULT_ITEM_QUANTITY', payload: { value: 'dec' } });
			return;
		}

		if (!cartPage && value === 'inc') {
			dispatch({ type: 'DEFAULT_ITEM_QUANTITY', payload: { value: 'inc', stock } });
			return;
		}

		if (cartPage && value === 'dec') {
			dispatch({ type: 'TOGGLE_CART_ITEM_AMOUNT', payload: { id, value: 'dec' } });
			return;
		}
		if (cartPage && value === 'inc') {
			dispatch({ type: 'TOGGLE_CART_ITEM_AMOUNT', payload: { id, value: 'inc' } });
			return;
		}
	};

	return (
		<Wrapper>
			<button type='button' className='amount-btn' onClick={() => addQuantityHander(cartPage, 'dec')}>
				<FaMinus />
			</button>
			<h2 className='amount'>{amount}</h2>
			<button type='button' className='amount-btn' onClick={() => addQuantityHander(cartPage, 'inc')}>
				<FaPlus />
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	width: 140px;
	justify-items: center;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	h2 {
		margin-bottom: 0;
	}
	button {
		background: transparent;
		border-color: transparent;
		cursor: pointer;
		padding: 1rem 0;
		width: 2rem;
		height: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h2 {
		margin-bottom: 0;
	}
`;

export default AmountButtons;
