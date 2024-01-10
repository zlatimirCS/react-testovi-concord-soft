import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
	return (
		<nav>
			<div className='linksContainer'>
				<ul>
					<li>
						<Link to='/'>
							<h1 className='logo'>MixMaster</h1>
						</Link>
					</li>
					<li>
						<NavLink to='/' exact activeClassName='activeLink'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/about' activeClassName='activeLink'>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to='/newsletter' activeClassName='activeLink'>
							Newsletter
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
