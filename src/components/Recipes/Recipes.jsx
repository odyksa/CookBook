import React from 'react';
import './Recipes.css';

export default function Recipes(props) {
    const recipes = props.recipes.map(recipe => {
        return (
            <div className="recipe" key={recipe.recipe_id}>
                <h3 className="recipe__title">{recipe.title}</h3>
                <img src={recipe.image_url} alt={recipe.title} className="recipe__img" />
            </div>
        );
    });

    return (
        <section className="recipes">
            {recipes}
        </section>
    );
}