import React from 'react';

const Menu = ({ title, price, img, desc }) => {
	return (
		<article className='menu-item'>
			<div className='imgContainer'>
				<img src={img} alt={title} />
			</div>
			<div className='itemInfo'>
				<header>
					<h4 className='title'>{title}</h4>
					<h4 className='price'>${Math.floor(price)}</h4>
				</header>
				<p className='item-text'>{desc}</p>
			</div>
		</article>
	);
};

export default Menu;
