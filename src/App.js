import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

class App extends Component {
    state = {
        recipes: []
    };

    getRecipes = async (ev) => {
        ev.preventDefault();
        const recipeValue = ev.target.elements.recipeValue.value;
        const API_KEY = 'a40b8bb0c61f559d98cc93ce9b938549';
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeValue}&count=9`);

        const data = await api_call.json();
        this.setState({ recipes: data.recipes });
    }

    render() {
        return (
            <div className="app">
                {/* header */}
                <header className="app-header">
                    <hgroup>
                        <h1 className="app-title">CookBook</h1>
                        <h2 className="app-subtitle">Search. Cook. Eat.</h2>
                    </hgroup>
                </header>
                {/* /header */}

                {/* main */}
                <main className="app-main">
                    <Form getRecipes={this.getRecipes} />
                    <Recipes recipes={this.state.recipes} />
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
