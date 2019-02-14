import React from "react";

export default class Product extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.product.title}</h1>
                <div className="content">
                    <img src={this.props.product.picture_link} alt={this.props.product}/>
                    <p>{this.props.product.description}</p>
                    <button type={"button"} name={"product"} value={this.props.product._id} onClick={this.props.onClick}>
                        Ajouter au panier
                    </button>
                </div>
            </React.Fragment>
        )
    }
}