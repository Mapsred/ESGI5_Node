import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
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
                <form noValidate onSubmit={this.handleSubmit}>
                    <FormLabel component="legend">Inscription</FormLabel>
                    <FormGroup>
                        <FormControl error>
                            <TextField
                                id="email"
                                label="Email"
                                onKeyUp={this.handleKeyUp('email')}
                                margin="normal"
                                type="email"
                                style={{width: 200}}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="firstname"
                                label="Firstname"
                                onKeyUp={this.handleKeyUp('firstname')}
                                margin="normal"
                                type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="lastname"
                                label="Lastname"
                                onKeyUp={this.handleKeyUp('lastname')}
                                margin="normal"
                                type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="password"
                                label="Password"
                                onKeyUp={this.handleKeyUp('password')}
                                margin="normal"
                                type="password"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="passwordCheck"
                                label="Password check"
                                onKeyUp={this.handleKeyUp('passwordCheck')}
                                margin="normal"
                                type="password"
                            />
                        </FormControl>
                        <FormControl>
                            <Button type="submit" variant="contained" color="primary">
                                S'enregistrer
                            </Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </Grid>
        )
    }
}