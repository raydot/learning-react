//095_array_of_recipes_ingredientslist.js

import Ingredient from './095_array_of_recipes_ingredient.js'

const IngredientsList = ({ list }) =>
	<ul className="ingredients">
		{list.map((ingredient, i) =>
			<Ingredient key={i} {...ingredient} />
		)}
	</ul>

export default IngredientsList