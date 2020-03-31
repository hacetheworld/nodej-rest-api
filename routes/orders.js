const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: `Handling Get Request from Orders routes`
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        msg: `Handling Post Request from Orders routes`
    });
});

//Single order
router.get(`/:orderId`, (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        msg: `Handling Get Request for Single order ${orderId} routes`
    });
});


// Patch method
router.patch(`/:orderId`, (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        msg: `Handling Patch Request for Single order ${orderId} routes`
    });
});

// Delete method
router.delete(`/:orderId`, (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        msg: `Handling Delete Request for Single order ${orderId} routes`
    });
});
module.exports = router;