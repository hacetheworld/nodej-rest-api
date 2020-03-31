const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use(morgan('dev'))
// Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Fallback routes

app.use((req, res, next) => {
    const error = new Error(`Not found your route :${req.hostname}, what you are looking for...`);
    error.status = 404;
    next(error);
});

// Trigger changes
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        msg: error.message
    });
});

module.exports = app;
