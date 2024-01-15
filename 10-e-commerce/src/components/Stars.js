import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ reviews, stars }) => {
	const fullStars = Math.floor(stars);
	const halfStar = stars % 1 !== 0;

	return (
		<Wrapper>
			<div className='stars'>
				{/* star */}
				{[...Array(fullStars)].map((star, index) => (
					<span key={Date.now() + index}>
						<BsStarFill />
					</span>
				))}
				{/* half star */}
				{halfStar && (
					<span>
						<BsStarHalf />
					</span>
				)}
				{/* empty star */}
				{[...Array(5 - Math.ceil(stars))].map((star, index) => (
					<span key={index}>
						<BsStar />
					</span>
				))}
			</div>
			<p className='reviews'>({reviews} customer reviews)</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #ffb900;
		font-size: 1rem;
		margin-right: 0.25rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`;
export default Stars;
