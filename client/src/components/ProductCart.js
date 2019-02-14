import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";

const styles = {
    card: {
        display: 'flex',
        width: '35vw',
        margin: '24px auto',
    },
    media: {
        width: 151,
        height: 151,
    },
    details: {
        display: 'flex',
        width: '100%',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
};

class Product extends React.PureComponent {
    render() {
        const { product, classes } = this.props;

        return (
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardMedia image={product.picture_link} title={product.title} className={classes.media}/>
                    <CardContent className={classes.column}>
                        <div>
                            <Typography variant={"title"}>
                                {product.title}
                            </Typography>
                            <Typography paragraph>
                                {product.description}
                            </Typography>
                        </div>
                        <div className={classes.actions}>
                            <Typography paragraph>
                                Prix : {product.price}
                            </Typography>
                            <Button size="small" onClick={() => this.props.onClick()}>Remove</Button>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.props.onClick()}>Remove from cart</Button>
                    </CardActions>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(Product);
