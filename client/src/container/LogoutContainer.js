import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import { connect } from "react-redux";
import { logout } from "../redux/actions/user";

class LogoutContainer extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(logout());
    }


    render() {
        return <React.Fragment>
            <Typography align="center" variant="h2">
                Logged out
            </Typography>
        </React.Fragment>
    }
}

export default connect()(LogoutContainer);