import React from 'react';
import { fetchProducts } from "../redux/actions/products";
import { connect } from "react-redux";
import Product from "../components/Product";
import { addToCart } from "../redux/actions/user";
import Grid from "@material-ui/core/Grid/Grid";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";

class ProductsContainer extends React.Component {

    state = {
        open: false
    };

    constructor(props) {
        super(props);
        this.props.fetchProducts();
    }

    onButtonClick = (product) => {
        this.setState({
            open: true
        });

        this.props.addToCart(product)
    };

    handleCloseNotification = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={24} alignContent={'space-around'}>
                    {this.props.products.map((product, i) =>
                        <Grid item xs={6} md={4} lg={3} key={i}>
                            {<Product product={product} onClick={() => this.onButtonClick(product)}/>}
                        </Grid>
                    )}
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.open}
                    autoHideDuration={1000}
                    onClose={this.handleCloseNotification}
                    message={<span>Added to cart</span>}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (states) => {
    const { products, product } = states.products;

    return {
        products,
        product
    };
};

const mapsDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts(dispatch)),
        addToCart: (data) => dispatch(addToCart(data, dispatch))
    }
};

export default connect(mapStateToProps, mapsDispatchToProps)(ProductsContainer);