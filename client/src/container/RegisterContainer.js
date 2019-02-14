import React from 'react';
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import RegisterForm from "./RegisterForm";
import { register } from "../redux/actions/register";


class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        const filteredData = {
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            password: data.password,
            passwordCheck: data.passwordCheck
        };
        this.props.register(filteredData)
    };

    render() {
        return (
            <Switch>
                <Route path="/register" render={() => <RegisterForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(register(data, dispatch))
    }
};

export default connect(undefined, mapsDispatchToProps)(SecurityContainer);
