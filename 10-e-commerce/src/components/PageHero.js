import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const PageHero = ({ customText }) => {
	const location = useLocation();

	const pathSegments = location.pathname.split('/').filter(Boolean);

	return (
		<Wrapper>
			<div className='section-center'>
				<h3>
					<Link to='/'>Home</Link>
					{pathSegments.slice(0, -1).map((segment, index) => (
						<React.Fragment key={index}>
							{' / '}
							<Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
						</React.Fragment>
					))}
					{customText && ` / ${customText}`}
				</h3>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--clr-primary-10);
	width: 100%;
	min-height: 20vh;
	display: flex;
	align-items: center;

	color: var(--clr-primary-1);
	a {
		color: var(--clr-primary-3);
		padding: 0.5rem;
		transition: var(--transition);
	}
	a:hover {
		color: var(--clr-primary-1);
	}
`;

export default PageHero;
