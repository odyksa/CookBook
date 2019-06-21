import React from 'react';

import './Form.css';
 
export default function Form(props) {
    return (
        <form className="form" onSubmit={props.getRecipes}>
            <input type="text" name="recipeValue" className="form__input" placeholder="Enter a name of dish"/>
            <button type="submit" className="form__button">Search recipe</button>
        </form>
    );
}