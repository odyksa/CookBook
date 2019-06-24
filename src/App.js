import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';

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

    componentDidMount = () => {
        const recipesFromSessionStorage = window.sessionStorage.getItem("recipes");
        const recipes = JSON.parse(recipesFromSessionStorage);

        if (recipes) {
            this.setState({ recipes });
        }
    }

    componentDidUpdate = () => {
        const recipesJSON = JSON.stringify(this.state.recipes);
        window.sessionStorage.setItem("recipes", recipesJSON);
    }

    render() {
        return (
            <BrowserRouter>
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
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={props =>
                                    <HomePage
                                        getRecipes={this.getRecipes}
                                        recipes={this.state.recipes}
                                        {...props}
                                    />
                                }
                            />
                            <Route
                                path="/recipe/:recipeID"
                                render={props => <RecipePage {...props} />}
                            />
                        </Switch>
                    </main>
                    {/* /main */}

                    {/* footer */}
                    <footer className="app-footer">
                        <p>Search. Cook. Eat.</p>
                    </footer>
                    {/* /footer */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
