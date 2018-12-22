//095_array_of_recipes_menu.js
import React from 'react';
import Recipe from './Recipe'

const Menu = ({ recipes }) =>
	<article>
		<header>
			<h1>Super Taste Sensations!</h1>
		</header>
		<div className="recipes">
			{ recipes.map((recipe, i) =>
				<Recipe key={i} {...recipe} />)
			}
		</div>
	</article>

export default Menu




