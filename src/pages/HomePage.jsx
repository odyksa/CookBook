import React, { Fragment } from 'react';

import Form from '../components/Form';
import Recipes from '../components/Recipes';

const HomePage = props => {
    return(
        <Fragment>
            <Form getRecipes={props.getRecipes}/>
            <Recipes recipes={props.recipes}/>
        </Fragment>
    );
};

export default HomePage;