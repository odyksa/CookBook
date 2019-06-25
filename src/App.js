import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';

class App extends Component {
    state = {
        recipes: [],
        items: 9,
        error: ''
    };

    getRecipes = async (ev) => {
        ev.preventDefault();
        const recipeValue = ev.target.elements.recipeValue.value;
        const API_KEY = 'bbc37d5b5eea4ac886ee0fd41c55fec0';
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeValue}&count=30`);

        const data = await api_call.json();

        if (data.recipes.length) {
            this.setState({ 
                recipes: data.recipes,
                error: false
             });
        } else {
            this.setState({ 
                error: true,
                recipes: [],
                items: 9
            });
            window.localStorage.clear();
        }
        
    }

    componentDidMount = () => {
        const recipesFromLocalStorage = window.localStorage.getItem("recipes");
        const recipes = JSON.parse(recipesFromLocalStorage);

        if (recipes) {
            this.setState({ recipes });
        }
    }

    componentDidUpdate = () => {
        const recipesJSON = JSON.stringify(this.state.recipes);
        window.localStorage.setItem("recipes", recipesJSON);
    }

    loadMore = () => {
        this.setState({ 
            items: this.state.items + 9
        });
    }

    render() {
        return (
            <BrowserRouter basename="/cookbook">
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
                                        items={this.state.items}
                                        loadMore={this.loadMore}
                                        error={this.state.error}
                                        {...props}
                                    />
                                }
                            />
                            <Route
                                path="/recipe/:recipeID"
                                render={props => <RecipePage {...props} />}
                            />
                            <Route component={() => (<div className="app-not-found-page">404 Not found </div>)} />
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
