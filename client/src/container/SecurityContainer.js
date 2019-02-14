import React from 'react';
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { login } from "../redux/actions/security";


class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.login(data.email, data.password)
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password, dispatch))
    }
};

export default connect(undefined, mapsDispatchToProps)(SecurityContainer);
