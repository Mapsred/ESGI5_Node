const Product = require('../src/models/product').Product;

const productsFixture = require('./products');
const categoriesFixtures = require('./categories');

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
