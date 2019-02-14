import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {Link} from 'react-router-dom'
import Typography from "@material-ui/core/Typography";

class HeaderContainer extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                    <Link to='/'>ReactStoreFront</Link>
                    </Typography>
                    <Typography>
                    <Link to="/security/login">Login</Link>
                    </Typography>
                    <Typography>
                    <Link to="/register">Register</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default HeaderContainer;