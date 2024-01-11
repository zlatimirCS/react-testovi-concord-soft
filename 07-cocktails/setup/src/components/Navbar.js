import React from 'react';
import { Link } from 'react-router-dom';
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
						<div className='links'>
							<NavLink to='/' exact activeClassName='activeLink'>
								Home
							</NavLink>
							<NavLink to='/about' activeClassName='activeLink'>
								About
							</NavLink>
							<NavLink to='/newsletter' activeClassName='activeLink'>
								Newsletter
							</NavLink>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
