import Typography from "@material-ui/core/Typography/Typography";
import { Link } from "react-router-dom";
import React from "react";

export default () => <React.Fragment>
    <Typography>
        <Link to="/security/login">Login</Link>
    </Typography>
    <Typography>
        <Link to="/register">Register</Link>
    </Typography>
</React.Fragment>

