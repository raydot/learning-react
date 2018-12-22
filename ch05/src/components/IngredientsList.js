//095_array_of_recipes_ingredientslist.js
import React from 'react';
// import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.js'

const IngredientsList = ({ list }) =>
	<ul className="ingredients">
		{list.map((ingredient, i) =>
			<Ingredient key={i} {...ingredient} />
		)}
	</ul>

export default IngredientsList