import React from 'react';
import { fetchProducts } from "../redux/actions/products";
import { connect } from "react-redux";
import Product from "../components/Product";

class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchProducts();
    }

    render() {
        return (
            <React.Fragment>
                <p>Product Container</p>
                <ul>
                </ul>
                {this.props.products.map((product, i) =>
                    <li key={i}>
                        {<Product product={product}/>}
                    </li>
                )}

            </React.Fragment>
        )
    }
}

const mapStateToProps = (states) => {
    return {
        products: states.products.products
    };
};

const mapsDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts(dispatch))
    }
};

export default connect(mapStateToProps, mapsDispatchToProps)(ProductsContainer);