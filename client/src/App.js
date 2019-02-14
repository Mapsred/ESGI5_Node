import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductContainer";
import HeaderContainer from "./container/HeaderContainer";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <React.Fragment>
                        <HeaderContainer/>
                        <Switch>
                            <Route path="/security" component={SecurityContainer}/>
                            <Route path="/products" component={ProductContainer}/>
                        </Switch>
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
