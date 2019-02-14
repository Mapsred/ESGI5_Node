import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "../redux/actions/user";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import ProductCart from "../components/ProductCart";

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.props.fetchUser();
    }

    render() {
        const products = this.props.user.cart;

        return (
            <React.Fragment>
                <Typography variant='h2' align='center'>Cart</Typography>
                {products.map((product, i) =>
                    <ProductCart key={i} product={product} onClick={() => this.onButtonClick(product)}/>
                )}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.user;

    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(fetchUser(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);