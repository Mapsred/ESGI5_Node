import React from 'react';
import Button from "@material-ui/core/Button/Button";
import { ExitToApp, ShoppingCart } from '@material-ui/icons';
import Link from "@material-ui/core/Link/Link";
import { Link as RouterLink } from 'react-router-dom';
import Badge from "@material-ui/core/Badge/Badge";

export default ({ user }) => <React.Fragment>
    <Button color="inherit">
        <Link component={RouterLink} to='/cart' color='inherit'>
            <Badge badgeContent={user.cart.length} color="secondary">
                <ShoppingCart/>
            </Badge>
        </Link>
    </Button>
    <Link component={RouterLink} to='/security/dashboard'
          color='inherit'
          variant='body1'>{user.firstname} {user.lastname}</Link>
    <Button color="inherit">
        <Link component={RouterLink} to='/security/logout' color='inherit'>
            <Badge badgeContent={user.cart.length} color="secondary">
                <ExitToApp/>
            </Badge>
        </Link>
    </Button>
</React.Fragment>