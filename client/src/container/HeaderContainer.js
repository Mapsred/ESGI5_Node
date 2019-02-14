import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import connect from "react-redux/es/connect/connect";
import AuthControls from "../components/AuthControls";
import AccountControls from "../components/AccountControls";
import { fetchUser } from "../redux/actions/user";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.getUser();
    }

    render() {
        const { user } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        <Link to='/'>ReactStoreFront</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
