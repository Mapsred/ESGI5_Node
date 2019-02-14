import React from 'react';

export default class LoginForm extends React.Component {

    state = {
        formData: {
            email: '',
            password: ''
        }
    };

    handleChange = (event, field) => {
        const input = event.currentTarget;

        this.setState({
            formData: Object.assign({}, this.state.formData, {
                [field]: input.value
            })
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.formData);
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user.isActive) {
            this.props.onSuccess();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input onChange={(event) => this.handleChange(event, 'email')}/>
                <label>Password</label>
                <input onChange={(event) => this.handleChange(event, 'password')} type="password"/>
                <button>Submit</button>
            </form>
        )
    }

}