import React from 'react';
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";

export default class LoginForm extends React.Component {

    state = {
        formData: {
            email: '',
            password: ''
        }
    };

    handleChange = name => event => {
        this.setState({
            formData: Object.assign({}, this.state.formData, {
                [name]: event.target.value
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
        let errors = {};
        if(typeof this.props.login.error !== undefined && this.props.login.details !== undefined && this.props.login.details.length > 0){
            const details = this.props.login.details;
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
                    <FormLabel component="legend">Connexion</FormLabel>
                    <FormGroup>
                        <FormControl>
                            {shouldHaveError('email') && <FormHelperText style={{color: "red"}}>{getErrorMsg('email')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('email')}
                                id="email"
                                label="Email"
                                onKeyUp={this.handleChange('email')}
                                margin="normal"
                                type="email"
                                style={{width: 200}}
                            />
                        </FormControl>
                        <FormControl>
                            {shouldHaveError('password') && <FormHelperText style={{color: "red"}}>{getErrorMsg('password')}</FormHelperText>}
                            <TextField
                                error={shouldHaveError('password')}
                                id="password"
                                label="Password"
                                onKeyUp={this.handleChange('password')}
                                margin="normal"
                                type="password"
                                style={{width: 200}}
                            />
                        </FormControl>
                        <FormControl>
                            <Button type="submit" variant="contained" color="primary">
                                Connection
                            </Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </Grid>
        )
    }
}