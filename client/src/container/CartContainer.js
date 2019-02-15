import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, removeFromCart } from "../redux/actions/user";
import Typography from "@material-ui/core/Typography";
import ProductCart from "../components/ProductCart";

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.props.fetchUser();
    }

    onButtonClick = (product) => {
        this.props.removeFromCart(product._id)
    };


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
        fetchUser: () => dispatch(fetchUser(dispatch)),
        removeFromCart: (id) => dispatch(removeFromCart(id, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);