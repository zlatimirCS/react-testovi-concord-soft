import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const categories = ['all', ...new Set(items.map((item) => item.category))];

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>
				<div className='buttonContainer'>
					{categories.map((category, index) => (
						<Categories key={index} category={category} filterItems={filterItems} />
					))}
				</div>
				<div className='menuContainer'>
					{menuItems.map((item) => {
						return <Menu key={item.id} {...item} />;
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
