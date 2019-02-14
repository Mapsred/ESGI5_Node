import React from 'react';
import { connect } from "react-redux";

import RegisterForm from "./RegisterForm";
import { register } from "../redux/actions/register";


class RegisterContainer extends React.Component {

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
            <RegisterForm onSubmit={this.handleSubmit}/>
        );
    }
}

const mapsDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(register(data, dispatch))
    }
};

export default connect(undefined, mapsDispatchToProps)(RegisterContainer);
