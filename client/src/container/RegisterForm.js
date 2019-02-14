import React from 'react';

export default class RegisterForm extends React.Component {

    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        passwordCheck: ''
    };

    handleKeyUp = (event, field) => {
        const input = event.currentTarget;

        this.setState({
            [field]: input.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input type="email" onKeyUp={(event) => this.handleKeyUp(event, 'email')}/>
                <label>Firstname</label>
                <input type="firstname" onKeyUp={(event) => this.handleKeyUp(event, 'firstname')}/>
                <label>Lastname</label>
                <input type="lastname" onKeyUp={(event) => this.handleKeyUp(event, 'lastname')}/>
                <label>Password</label>
                <input type="password" onKeyUp={(event) => this.handleKeyUp(event, 'password')}/>
                <label>Password Check</label>
                <input type="password" onKeyUp={(event) => this.handleKeyUp(event, 'passwordCheck')}/>
                <button>Submit</button>
            </form>
        )
    }

}