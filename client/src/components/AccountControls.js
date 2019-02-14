import React from 'react';
import Button from "@material-ui/core/Button/Button";
import { ShoppingCart } from '@material-ui/icons';
import Link from "@material-ui/core/Link/Link";
import { Link as RouterLink } from 'react-router-dom';

export default ({ user }) => <React.Fragment>
    <Button color="inherit">
        <Link component={RouterLink} to='/cart' color='inherit'><ShoppingCart/></Link>
    </Button>
    <Link component={RouterLink} to='/security/dashboard'
          color='inherit'
          variant='body1'>{user.firstname} {user.lastname}</Link>
</React.Fragment>