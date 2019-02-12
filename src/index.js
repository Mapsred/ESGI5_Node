const Movie = require('./models/movie').Movie;
const Product = require('./models/product').Product;

const movie1 = new Movie();
movie1.title = "Test Movie 2";
movie1.year = 1930;
movie1.released = Date.now();

movie1.save();

Movie.find({ title: "Test Movie 2" }).then((result) => {
    console.log(result);
});

