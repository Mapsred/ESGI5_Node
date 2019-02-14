import React from 'react';
import { fetchProducts } from "../redux/actions/products";
import { connect } from "react-redux";
import Product from "../components/Product";
import { addToCart } from "../redux/actions/user";

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
            <React.Fragment>

                <p>Product Container</p>
                <form onSubmit={this.onButtonClick}>
                    <ul>
                        {this.props.products.map((product, i) =>
                            <li key={i}>
                                {<Product product={product} onClick={()=> this.onButtonClick(product)}/>}
                            </li>
                        )}
                    </ul>
                </form>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (states) => {
    console.log(states);
    return {
        products: states.products.products,
        product: states.products.product
    };
};

const mapsDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts(dispatch)),
        addToCart: (data) => dispatch(addToCart(data, dispatch))
    }
};

export default connect(mapStateToProps, mapsDispatchToProps)(ProductsContainer);