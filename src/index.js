const express = require('express');
const productRouter = require('./routes/product');

const app = express();


app.use('/products', productRouter);


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