const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

const errorMiddleware = require('./middleware/error');

//config
dotenv.config({ path: './config/config.env' });

app.use(
  express.json({
    limit: '50mb',
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Route Imports
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const payment = require('./routes/paymentRoutes');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
});

//middleware for error
app.use(errorMiddleware);

module.exports = app;
