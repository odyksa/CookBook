import React, { Fragment } from 'react';

import Form from '../components/Form';
import Recipes from '../components/Recipes';

const HomePage = props => {
    return(
        <Fragment>
            <Form getRecipes={props.getRecipes}/>
            <Recipes recipes={props.recipes} items={props.items} error={props.error}/>
            {
                props.items < props.recipes.length && <button onClick={props.loadMore} className="load-more-btn">Load more</button>
            }            
        </Fragment>
    );
};

export default HomePage;