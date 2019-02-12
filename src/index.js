const express = require('express');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');
const bodyParser = require('body-parser');
const security = require('./middlewares/security');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(security.verifyToken);

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/register', registerRouter);
app.use('/', authRouter);

app.listen(3000, () => console.log('Listening on port 3000'));

// const Cart = require('./models/cart').Cart;
// const Category = require('./models/category').Category;
// const Product = require('./models/product').Product;
// const User = require('./models/user').User;
//
// const movie1 = new Movie();
// movie1.title = "Test Movie 2";
// movie1.year = 1930;
// movie1.released = Date.now();
//
// movie1.save();
//
// Movie.find({ title: "Test Movie 2" }).then((result) => {
//     console.log(result);
// });
//