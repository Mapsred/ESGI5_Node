import React from 'react';
import { fetchProducts } from "../redux/actions/products";
import { connect } from "react-redux";
import Product from "../components/Product";
import { addToCart } from "../redux/actions/user";
import Grid from "@material-ui/core/Grid/Grid";

class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchProducts();
    }

    onButtonClick = (product) => {
        this.props.addToCart(product)
    };

    render() {
        return (
            <Grid container spacing={24} alignContent={'space-around'}>
                {this.props.products.map((product, i) =>
                    <Grid item xs={6} md={4} lg={3} key={i}>
                        {<Product product={product} onClick={() => this.onButtonClick(product)}/>}
                    </Grid>
                )}
            </Grid>
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