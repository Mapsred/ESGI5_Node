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
    },
};

class Product extends React.PureComponent {
    render() {
        const { product, classes } = this.props;

        return (
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardMedia image={product.picture_link} title={product.title} className={classes.media}/>
                    <CardContent>
                        <Typography variant={"title"}>
                            Test
                        </Typography>
                        <Typography paragraph>
                            {product.description}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(Product);
