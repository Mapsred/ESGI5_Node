import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductContainer";
import RegisterContainer from "./container/RegisterContainer";
import HeaderContainer from "./container/HeaderContainer";

class App extends Component {

    render() {
        return (
                                <Route path="/register" component={RegisterContainer}/>
            <div className="App">
                <header className="App-header">
                    <ProfileBanner/>

                    <BrowserRouter>
                        <React.Fragment>
                            <Link to="/register">Register</Link>
                            <Link to="/security/login">Login</Link>
                            <Link to="/products">Products</Link>

                            <Switch>
                                <Route path="/register" component={RegisterContainer}/>
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
