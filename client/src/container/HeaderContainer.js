import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import connect from "react-redux/es/connect/connect";
import { fetchUser } from "../redux/actions/user";
import { withStyles } from "@material-ui/core";
import AccountControls from "../components/AccountControls";
import AuthControls from "../components/AuthControls";
import Link from "@material-ui/core/Link/Link";
import { Link as RouterLink } from 'react-router-dom';

const styles = {
    root: {
        marginBottom: 24
    },
    bar: {
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
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.bar}>
                    <Link component={RouterLink} to='/' color="inherit" variant="title">
                        ReactStoreFront
                    </Link>

                    {user.isActive &&
                    <Link component={RouterLink} to='/products' color="inherit" variant="body1">
                        Products
                    </Link>
                    }

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
