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

    handleRegistered = () => {
        this.props.history.push('/security/login');
    };

    render() {
        return (
            <RegisterForm onSubmit={this.handleSubmit} onSuccess={this.handleRegistered} register={this.props.registered}/>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (data) => dispatch(register(data, dispatch))
    }
};

const mapStateToProps = (state) => {
    return {
        registered: state.register.register
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
