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

    // handleChange = (event, field) => {
    //     const input = event.currentTarget;
    //     this.setState({
    //         formData: Object.assign({}, this.state.formData, {
    //             [field]: input.value
    //         })
    //     });
    // };

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
        return (
            <Grid container justify="center">
                <form noValidate onSubmit={this.handleSubmit}>
                    <FormLabel component="legend">Connexion</FormLabel>
                    <FormGroup>
                        <FormControl>
                            {/*{shouldHaveError('email') && <FormHelperText style={{color: "red"}}>{getErrorMsg('email')}</FormHelperText>}*/}
                            <TextField
                                // error={shouldHaveError('email')}
                                id="email"
                                label="Email"
                                onKeyUp={this.handleChange('email')}
                                margin="normal"
                                type="email"
                                style={{width: 200}}
                            />
                        </FormControl>
                        <FormControl>
                            {/*{shouldHaveError('email') && <FormHelperText style={{color: "red"}}>{getErrorMsg('email')}</FormHelperText>}*/}
                            <TextField
                                // error={shouldHaveError('email')}
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