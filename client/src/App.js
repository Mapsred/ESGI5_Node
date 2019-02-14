import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from "./container/ToggleButtonContainer";
import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductContainer";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class App extends Component {

    render() {
        const style = {
            maxHeight: 50,
            maxWidth: "100%"
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={style}/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>

                    <ToggleButtonContainer/>

                    <BrowserRouter>
                        <React.Fragment>
                            <Link to="/security/login">Login</Link>
                            <Link to="/products">Products</Link>

                            <Switch>
                                <Route path="/security" component={SecurityContainer}/>
                                <Route path="/products" component={ProductContainer}/>
                            </Switch>
                        </React.Fragment>
                    </BrowserRouter>

                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
