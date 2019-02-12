const Product = require('../src/models/product').Product;

const productsFixture = require('./products');
const categoriesFixtures = require('./categories');

Product.deleteMany({}, function (error, result) {
    console.log('Products removed');
});

for (let e = 0; e < productsFixture.length; e++) {

    const categories = [
        categoriesFixtures[Math.floor(Math.random() * (categoriesFixtures.length - 1))]
    ];

    const product = new Product(productsFixture[e]);
    product.category = categories;

    product.save();
}

