import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

class App extends Component {
    state = {
        recipes: []
    };

    getRecipes = async (ev) => {
        ev.preventDefault();
        const recipeValue = ev.target.elements.recipeValue.value;
        const API_KEY = 'd681f3856b8b7cf1aed083b60883e8d4';
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeValue}&count=10`);

        const data = await api_call.json();
        this.setState({ recipes: data.recipes });
    }

    render() {
        return (
            <div className="app">
                {/* header */}
                <header className="app-header">
                    <h1 className="app-title">CookBook</h1>
                </header>
                {/* /header */}

                {/* main */}
                <main className="app-main">
                    <Form getRecipes={this.getRecipes}/>
                    { this.state.recipes.map(recipe => {
                        return <p key={recipe.recipe_id}>{recipe.title}</p>;
                    }) }
                </main>
                {/* /main */}

                {/* footer */}
                <footer className="app-footer">
                    footer
                </footer>
                {/* /footer */}
            </div>
        );
    }
}

export default App;
