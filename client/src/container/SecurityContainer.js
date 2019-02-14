import React from 'react';
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { login } from "../redux/actions/security";
import DashboardContainer from "./DashboardContainer";


class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.login(data.email, data.password);
    };

    handleLogged = () => {
        this.props.history.push('/security/dashboard');
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => {
                    return <LoginForm user={this.props.user}
                                      onSubmit={this.handleSubmit}
                                      onSuccess={this.handleLogged}/>
                }}/>
                <Route path="/security/dashboard" component={DashboardContainer}/>
            </Switch>
        );
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password, dispatch))
    }
};

const mapsStateToProps = (state) => {
    const { user: { user } } = state;

    return {
        user
    }
};

export default connect(mapsStateToProps, mapsDispatchToProps)(SecurityContainer);
