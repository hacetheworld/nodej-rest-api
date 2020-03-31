const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: `Handling Get Request from product routes`
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        msg: `Handling Post Request from product routes`,
        product
    });
});

router.get(`/:productId`, (req, res, next) => {
    const productId = req.params.productId;
    res.status(200).json({
        msg: `Handling Get Request for Single product ${productId} routes`
    });
});

// Patch method
router.patch(`/:productId`, (req, res, next) => {
    const productId = req.params.productId;
    res.status(200).json({
        msg: `Handling Patch Request for Single product ${productId} routes`
    });
});

// Delete method
router.delete(`/:productId`, (req, res, next) => {
    const productId = req.params.productId;
    res.status(200).json({
        msg: `Handling Delete Request for Single product ${productId} routes`
    });
});


module.exports = router;