import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SecurityContainer from "./container/SecurityContainer";
import ProductContainer from "./container/ProductsContainer";
import RegisterContainer from "./container/RegisterContainer";
import HeaderContainer from "./container/HeaderContainer";
import CartContainer from './container/CartContainer';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import NotFound from "./components/NotFound";
import Home from "./container/Home";

const styles = {
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex"
    },
    content: {
        flexGrow: 1,
        maxWidth: '70vw',
        margin: 'auto',
        minWidth: 0 // So the Typography noWrap works
    }
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <BrowserRouter>
                    <React.Fragment>
                        <HeaderContainer/>
                        <div className={classes.root}>
                            <main className={classes.content}>
                                <Switch>
                                    <Route path="/register" component={RegisterContainer}/>
                                    <Route path="/security" component={SecurityContainer}/>
                                    <Route path="/products" component={ProductContainer}/>
                                    <Route path="/cart" component={CartContainer}/>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="*" component={NotFound}/>
                                </Switch>
                            </main>
                        </div>
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {

    const { user } = state.user;

    return {
        user
    }
};

export default connect(mapStateToProps)(withStyles(styles)(App));
