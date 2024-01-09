import React from 'react';

const Categories = ({ category, filterItems }) => {
	return (
		<button className='filterBtn' onClick={() => filterItems(category)}>
			{category}
		</button>
	);
};

export default Categories;
