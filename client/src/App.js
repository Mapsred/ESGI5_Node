import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductContainer";
import ProfileBanner from './container/ProfileBanner';

class App extends Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <ProfileBanner/>

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
                </header>
            </div>
        );
    }
}

export default App;
