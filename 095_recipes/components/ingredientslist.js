//095_array_of_recipes_ingredientslist.js

import Ingredient from './ingredient.js'

const IngredientsList = ({ list }) =>
	<ul className="ingredients">
		{list.map((ingredient, i) =>
			<Ingredient key={i} {...ingredient} />
		)}
	</ul>

export default IngredientsList