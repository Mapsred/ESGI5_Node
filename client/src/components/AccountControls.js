import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Link from "react-router-dom/es/Link";

export default ({ user }) => <React.Fragment>
    <Typography>
        <Link to="/cart">Cart</Link>
    </Typography>
    <Typography>
        {user.firstname} {user.lastname}
    </Typography>
</React.Fragment>