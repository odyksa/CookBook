import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Recipes.css';

export default function Recipes(props) {
    const recipes = props.recipes.map(recipe => {
        return (
            <div className="recipe" key={recipe.recipe_id}>
                <h3 
                    className="recipe__title"
                >
                    {
                        recipe.title.length > 40 ? `${recipe.title.substring(0, 39)}...` : `${recipe.title}`
                    }
                </h3>
                <img 
                    src={recipe.image_url} 
                    alt={recipe.title} 
                    className="recipe__img" 
                />
                <footer className="recipe__footer">
                    <p>
                        Publisher: 
                        <span>
                            {recipe.publisher.length > 25 ? `${recipe.publisher.substring(0, 24)}...` : `${recipe.publisher}`}
                        </span>
                    </p>
                    <Link 
                        to={{ pathname: `/recipe/${recipe.recipe_id}` }} className="recipe__details"
                    >
                        View recipe
                    </Link>
                </footer>
            </div>
        );
    });

    return (
        <section className="recipes">
            {recipes}
        </section>
    );
}

Recipes.propTypes = {
    getRecipes: PropTypes.array
};