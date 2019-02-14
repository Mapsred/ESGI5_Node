import React from "react";

export default class Product extends React.PureComponent {
    render() {
        console.log(this.props.product);
        return (
            <React.Fragment>
                <h1>{this.props.product.title}</h1>
                <div className="content">
                    <img src={this.props.product.picture_link} alt={this.props.product}/>
                    <p>{this.props.product.description}</p>
                </div>
            </React.Fragment>
        )
    }
}