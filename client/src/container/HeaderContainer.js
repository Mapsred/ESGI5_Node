import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import connect from "react-redux/es/connect/connect";
import { fetchUser } from "../redux/actions/user";
import Button from "@material-ui/core/Button/Button";
import { withStyles } from "@material-ui/core";
import AccountControls from "../components/AccountControls";
import AuthControls from "../components/AuthControls";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
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
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        ReactStoreFront
                    </Typography>
                    {!user.isActive && <AuthControls/>}
                    {user.isActive && <AccountControls user={user}/>}
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
