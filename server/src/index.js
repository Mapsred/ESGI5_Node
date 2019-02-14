const express = require('express');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');
const registerRouter = require('./routes/register');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const bodyParser = require('body-parser');
const security = require('./middlewares/security');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(security.verifyToken);

app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/', authRouter);

app.listen(3000, () => console.log('Listening on port 3000'));