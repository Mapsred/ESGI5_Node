const Product = require('../src/models/product').Product;
const User = require("../src/models/user").User;

const productsFixture = require('./products');
const categoriesFixtures = require('./categories');
const usersFixtures = require('./user');

Product.deleteMany({}).then(() => {
    for (let e = 0; e < productsFixture.length; e++) {

        const categories = [
            {
                label: categoriesFixtures[Math.floor(Math.random() * (categoriesFixtures.length - 1))]
            }
        ];

        const product = new Product(productsFixture[e]);
        product.category = categories;

        product.save();
    }
});


User.deleteMany({}).then(() => {
    for (let e = 0; e < usersFixtures.length; e++) {
        const user = new User(usersFixtures[e]);

        user.save();
    }
});