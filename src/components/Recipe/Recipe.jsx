import React from 'react';

const Recipe = props => {
    const { recipeID } = props.match.params;
    console.log(recipeID);
    const recipe = props.location.state.recipes.find(recipe => recipe.recipe_id === props.match.params.recipeID);

    console.log(recipe);
    return(
        <div>d</div>
    )
}

export default Recipe;