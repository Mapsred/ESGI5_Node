import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductsContainer";
import RegisterContainer from "./container/RegisterContainer";
import HeaderContainer from "./container/HeaderContainer";
import CartContainer from './container/CartContainer';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <BrowserRouter>
                    <React.Fragment>
                        <HeaderContainer/>
                        <Switch>
                            <Route path="/register" component={RegisterContainer}/>
                            <Route path="/security" component={SecurityContainer}/>
                            <Route path="/products" component={ProductContainer}/>
                            <Route path="/cart" component={CartContainer}/>
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
