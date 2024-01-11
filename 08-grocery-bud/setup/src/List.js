import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ groceryText, id, groceryEditHandler, groceryDeleteHandler }) => {
	return (
		<article className='groceryItem'>
			<p className='title'>{groceryText}</p>
			<div className='btnContainer'>
				<button type='button' className='edit-btn' onClick={() => groceryEditHandler(id)}>
					<FaEdit />
				</button>
				<button type='button' className='delete-btn' onClick={() => groceryDeleteHandler(id)}>
					<FaTrash />
				</button>
			</div>
		</article>
	);
};

export default List;
