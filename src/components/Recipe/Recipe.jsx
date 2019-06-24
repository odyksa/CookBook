import React from 'react';
import { Link } from 'react-router-dom';

import './Recipe.css';

const Recipe = props => {
    const { recipe } = props;
    console.log(recipe);

    return (
        <article className="recipe-card">
            <img 
                src={recipe.image_url} 
                alt={recipe.title}
                className="recipe-card__img"
            />
            <h3 className="recipe-card__title">{recipe.title}</h3>
            <p className="recipe-card__publisher">
                Publisher: 
                <span>{recipe.publisher}</span>
            </p>
            <Link to="/" className="recipe-card__button">Back</Link>
        </article>

    )
}

export default Recipe;