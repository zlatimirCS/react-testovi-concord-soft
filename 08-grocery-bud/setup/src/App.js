import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import Alert from './Alert';

function App() {
	const [groceries, setGroceries] = useState([]);
	const [groceryText, setGroceryText] = useState('');
	const [edit, setEdit] = useState(false);
	const [editId, setEditId] = useState(null);
	const inputField = useRef(null);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

	useEffect(() => {
		let groceryData = localStorage.getItem('groceries');
		console.log(groceryData);
		if (groceryData === null) {
			localStorage.setItem('groceries', JSON.stringify([]));
			groceryData = localStorage.getItem('groceries');
		}
		setGroceries(JSON.parse(groceryData));
	}, []);

	useEffect(() => {
		localStorage.setItem('groceries', JSON.stringify(groceries));
	}, [groceries]);

	const grocerieFormHandler = (e) => {
		e.preventDefault();
		if (groceryText === '') {
			setAlert({ show: true, msg: 'please enter value', type: 'danger' });
			inputField.current.focus();
			return;
		}

		if (edit) {
			setGroceries((prevState) => {
				const updatedGroceries = prevState.map((grocery) => {
					if (grocery.id === editId) {
						return { ...grocery, groceryText };
					} else {
						return grocery;
					}
				});

				return updatedGroceries;
			});
			setEdit(false);
			setEditId(null);
			setAlert({ show: true, msg: 'value changed', type: 'success' });
			setGroceryText('');
			return;
		}

		setGroceries([...groceries, { groceryText, id: uuidv4() }]);
		setAlert({ show: true, msg: 'item added to the list', type: 'success' });
		setGroceryText('');
	};

	const groceryEditHandler = (id) => {
		setEdit(true);

		setGroceries((prevState) => {
			const grocery = prevState.find((grocery) => grocery.id === id);
			const { groceryText } = grocery;
			setGroceryText(groceryText);
			setEditId(id);
			inputField.current.focus();

			const updatedGroceries = prevState.map((grocery) => {
				if (grocery.id === id) {
					return { ...grocery, groceryText };
				} else {
					return grocery;
				}
			});

			return updatedGroceries;
		});
	};

	const groceryDeleteHandler = (id) => {
		setGroceries((prevState) => {
			const updatedGroceries = prevState.filter((grocery) => grocery.id !== id);
			return updatedGroceries;
		});
		setAlert({ show: true, msg: 'item removed', type: 'danger' });
	};

	const clearAllHandler = () => {
		setGroceries([]);
		setAlert({ show: true, msg: 'empty list', type: 'danger' });
	};

	return (
		<section className='groceryBudContainer'>
			{alert.show && <Alert {...alert} setAlert={setAlert} />}
			<form action='' className='groceryForm' onSubmit={grocerieFormHandler}>
				<h3>grocery bud</h3>
				<div className='formControl'>
					<input type='text' ref={inputField} className='grocery' placeholder='e.g. eggs' value={groceryText} onChange={(e) => setGroceryText(e.target.value)} />
					<button type='submit' className='submit-btn'>
						{edit ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			<div className='groceryContainer'>
				{groceries.map((grocery, index) => (
					<List key={index} {...grocery} groceryEditHandler={groceryEditHandler} groceryDeleteHandler={groceryDeleteHandler} />
				))}
			</div>
			{groceries.length > 0 && (
				<button className='clear-btn' onClick={clearAllHandler}>
					clear items
				</button>
			)}
		</section>
	);
}

export default App;
