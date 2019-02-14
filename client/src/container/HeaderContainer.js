import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import connect from "react-redux/es/connect/connect";
import { fetchUser } from "../redux/actions/user";
import { withStyles } from "@material-ui/core";
import AccountControls from "../components/AccountControls";
import AuthControls from "../components/AuthControls";
import Link from "@material-ui/core/Link/Link";
import { Link as RouterLink } from 'react-router-dom';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
};

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.getUser();
    }

    render() {
        const { classes, user } = this.props;

        return (
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <Typography variant="title" color="inherit">
                        ReactStoreFront
                    </Typography>

                    <Link component={RouterLink} to='/products' color="inherit" variant="body1">
                        Products
                    </Link>

                    <div>
                        {!user.isActive && <AuthControls/>}
                        {user.isActive && <AccountControls user={user}/>}
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => {
    const { user: { user } } = state;

    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(fetchUser(dispatch)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderContainer));
