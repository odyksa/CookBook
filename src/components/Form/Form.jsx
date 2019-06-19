import React from 'react';

import './Form.css';
 
export default function Form(props) {
    return (
        <form className="form" onSubmit={props.getRecipes}>
            <input type="text"/>
            <button type="submit">Search recipe</button>
        </form>
    );
}