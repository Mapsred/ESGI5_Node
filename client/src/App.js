import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductContainer";
import HeaderContainer from "./container/HeaderContainer";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <HeaderContainer/>
                <div className="container">
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
                </div>
            </React.Fragment>
        );
    }
}

export default App;
