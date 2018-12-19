        // This is what's left of the index after the earlier modules have all been broken out into
        // stateless components / individual files.  A few things left over from earlier refactoring
        // are still hanging around in comments below



        // A stateless functional component for an individual Recipe
        /*const Recipe = ( {name, ingredients, steps} ) =>
          <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <ul className="ingredients">
              {ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.name}</li>
              )}
            </ul>
            <section className="instructions">
              <h2>Cooking Instructions</h2>
              {steps.map((step, i) =>
                <p key={i}>{step}</p>
              )}
            </section>
          </section>*/

        /* 
          This component is doing quite a bit.  We are displaying the name of the recipe, constructing an unordered
          list of ingredients, and displaying the instructions, with each step getting its own paragraph element.

          A more functional approach to the Recipe component would be to break it up into smaller, more focused
          stateless functional components and compose them together.  We can start by pulling the instructions out into
          their own stateless functional commponent and creating a module in a separate file that we can use for
          any set of instructions.  

          (This is 095_array_of_recipes_instructions.js)
        */

        // A stateless functional component for the Menu of Recipes
        /*const Menu = ({ title, recipes }) => 
          <article>
            <header>
              <h1>{title}</h1>
            </header>
            <div className="recipes">
              {recipes.map((recipe, i) => 
                <Recipe key={i} {...recipe} />
              )}
            </div>
          </article>
        */

        // A call to ReactDOM.render to render our Menu into the current DOM
        ReactDOM.render(
          <Menu recipes={data} title="Delicious Recipes" />, document.getElementById("react-container")
        )