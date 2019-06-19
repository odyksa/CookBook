import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

class App extends Component {
    getRecipes = () => {
        console.log('working');
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
                </main>
                {/* /main */}
            </div>
        );
    }
}

export default App;
