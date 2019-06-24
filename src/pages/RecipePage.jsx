import React, { Fragment } from 'react';

import Recipe from '../components/Recipe';

const RecipePage = props => {
    const { recipeID } = props.match.params;
    const { recipes } = props.location.state;
    const recipe = recipes.find(recipe => recipe.recipe_id === recipeID);

    return(
        <Fragment>
            <Recipe recipe={recipe}/>
        </Fragment>
    );
};

export default RecipePage;