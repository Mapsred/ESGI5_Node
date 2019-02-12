const Product = require('../src/models/product').Product;
const products = require('./products');

const Category = require('../src/models/category').Category;
const categories = require('./categories');

Product.remove({});
for (let i = 0; i < products.length; i++) {
    const product = new Product(products[i]);
    product.save();
}

Category.remove({});
for (let i = 0; i < categories.length; i++) {
    const category = new Category(categories[i]);
    category.save();
}

