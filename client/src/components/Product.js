import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
};

class Product extends React.PureComponent {
    render() {
        const { product, classes } = this.props;

        return (
            <Card>
                <CardHeader title={product.title}/>
                <CardMedia image={product.picture_link} title={product.title} className={classes.media}/>
                <CardContent>
                    <Typography paragraph>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => this.props.onClick()}>Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(Product);

//
// <div style={{ textAlign: 'center' }}>
//     <h1>{this.props.product.title}</h1>
//     <div className="content">
//         <img src={this.props.product.picture_link} alt={this.props.product}/>
//         <p>{this.props.product.description}</p>
//         <button type={"button"} name={"product"} value={this.props.product._id} onClick={this.props.onClick}>
//             Ajouter au panier
//         </button>
//     </div>
// </div>