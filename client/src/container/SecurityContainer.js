import React from 'react';
import { Route, Switch } from "react-router";
import LoginForm from "./LoginForm";


export default class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        console.log(data);
        fetch('http://127.0.0.1:3000/login_check',
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => localStorage.setItem('token', data.token))
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }

}