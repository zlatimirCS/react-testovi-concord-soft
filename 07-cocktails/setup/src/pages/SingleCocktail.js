import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
	const [cocktail, setCocktail] = useState(null);
	const params = useParams();
	const { id } = params;

	const { loading, setLoading, search } = useGlobalContext();

	const getSingleCocktail = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${id}`);
			const data = await response.json();

			console.log(data);
			const { drinks } = data;

			const {
				strAlcoholic: drinkIsAlcoholic,
				strCategory: drinkCategory,
				strDrink: drinkName,
				strDrinkThumb: drinkImage,
				strGlass: drinkGlass,
				strInstructions: drinkInstructions,
				strIngredient1,
				strIngredient2,
				strIngredient3,
				strIngredient4,
				strIngredient5
			} = drinks[0];

			const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
			if (data) {
				setCocktail({ data, drinkIsAlcoholic, drinkCategory, drinkName, drinkImage, drinkGlass, drinkInstructions, ingredients });

				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const { drinkIsAlcoholic, drinkCategory, drinkName, drinkImage, drinkInstructions, drinkGlass, ingredients } = cocktail || {};

	useEffect(() => {
		getSingleCocktail();

		//   return () => {
		// 	second
		//   }
	}, []);

	if (loading) {
		return <Loading />;
	}

	if (!cocktail) {
		return <h2 className='section-title'>No cocktail to display</h2>;
	}

	return (
		<div className='singleCocktailContainer'>
			<Link to={`/?search=${search}`}>Back Home</Link>
			<h3>{drinkName}</h3>
			<div className='imgContainer'>
				<img src={drinkImage} alt={drinkName} />
			</div>
			<div className='textContainer'>
				<p>
					<span>Name</span> {drinkName}
				</p>
				<p>
					<span>Category</span> {drinkCategory}
				</p>
				<p>
					<span>Info</span> {drinkIsAlcoholic}
				</p>
				<p>
					<span>Glass</span> {drinkGlass}
				</p>
				<p>
					<span>Ingredients</span>
					{ingredients.map((ingredient, index) => (
						<span key={index}> {ingredient} </span>
					))}
				</p>
				<p>
					<span>Instructions</span> {drinkInstructions}
				</p>
			</div>
		</div>
	);
};

export default SingleCocktail;
