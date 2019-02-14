import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

export default class RegisterForm extends React.Component {

    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        passwordCheck: ''
    };

    handleKeyUp = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <Grid container justify="center">
                <form onSubmit={this.handleSubmit}>
                    <FormLabel component="legend">Inscription</FormLabel>
                    <FormGroup>
                        <TextField
                            id="email"
                            label="Email"
                            onKeyUp={this.handleKeyUp('email')}
                            margin="normal"
                            type="email"
                            style={{width: 200}}
                        />
                        <TextField
                            id="firstname"
                            label="Firstname"
                            onKeyUp={this.handleKeyUp('firstname')}
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            id="lastname"
                            label="Lastname"
                            onKeyUp={this.handleKeyUp('lastname')}
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            onKeyUp={this.handleKeyUp('password')}
                            margin="normal"
                            type="password"
                        />
                        <TextField
                            id="passwordCheck"
                            label="Password check"
                            onKeyUp={this.handleKeyUp('passwordCheck')}
                            margin="normal"
                            type="password"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            S'enregistrer
                        </Button>
                    </FormGroup>
                </form>
            </Grid>
        )
    }
}