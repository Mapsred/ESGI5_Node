import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

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
        let errors = {};
        if(typeof this.props.register.error !== undefined && this.props.register.details !== undefined && this.props.register.details.length > 0){
            const details = this.props.register.details;
            for(let i in details) {
                errors[details[i]['param']] = details[i]['msg'];
            }
        }

        const shouldHaveError = function(field) {
            return Object.entries(errors).length !== 0 && errors.constructor === Object && typeof errors[field] !== "undefined";
        };

        const getErrorMsg = function(field) {
            return errors[field] !== "undefined" ? errors[field] : "";
        };

        return (
            <Grid container justify="center">
                <form noValidate onSubmit={this.handleSubmit}>
                    <FormLabel component="legend">Inscription</FormLabel>
                    <FormGroup>
                        <FormControl>
                            {shouldHaveError('email') && <FormHelperText style={{color: "red"}}>{getErrorMsg('email')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('email')}
                                id="email"
                                label="Email"
                                onKeyUp={this.handleKeyUp('email')}
                                margin="normal"
                                type="email"
                                style={{width: 200}}
                            />
                        </FormControl>
                        <FormControl>
                            {shouldHaveError('firstname') && <FormHelperText style={{color: "red"}}>{getErrorMsg('firstname')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('firstname')}
                                id="firstname"
                                label="Firstname"
                                onKeyUp={this.handleKeyUp('firstname')}
                                margin="normal"
                                type="text"
                            />
                        </FormControl>
                        <FormControl>
                            {shouldHaveError('lastname') && <FormHelperText style={{color: "red"}}>{getErrorMsg('lastname')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('lastname')}
                                id="lastname"
                                label="Lastname"
                                onKeyUp={this.handleKeyUp('lastname')}
                                margin="normal"
                                type="text"
                            />
                        </FormControl>
                        <FormControl>
                            {shouldHaveError('password') && <FormHelperText style={{color: "red"}}>{getErrorMsg('password')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('password')}
                                id="password"
                                label="Password"
                                onKeyUp={this.handleKeyUp('password')}
                                margin="normal"
                                type="password"
                            />
                        </FormControl>
                        <FormControl>
                            {shouldHaveError('passwordCheck') && <FormHelperText style={{color: "red"}}>{getErrorMsg('passwordCheck')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('passwordCheck')}
                                id="passwordCheck"
                                label="Password check"
                                onKeyUp={this.handleKeyUp('passwordCheck')}
                                margin="normal"
                                type="password"
                            />
                        </FormControl>
                        <FormControl>
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </Grid>
        )
    }
}