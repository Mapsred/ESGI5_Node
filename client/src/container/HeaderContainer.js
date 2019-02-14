import React from 'react';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography/Typography";

class HeaderContainer extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography>
                        <Link to='/'>ReactStoreFront</Link>
                    </Typography>
                    <Typography>
                        <Link to="/security/login">Login</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default HeaderContainer;