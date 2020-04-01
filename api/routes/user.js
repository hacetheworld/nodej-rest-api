const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    //Hash the password
    bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                email: req.body.email,
                password: hash
            });

            user.save()
                .then(userData => {
                    res.status(201).json({
                        message: 'User Created Succesfully...',
                        userData
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        }
    });
});




//Login
router.post('/signup', (req, res) => {
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    //Hash the password
    bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                email: req.body.email,
                password: hash
            });

            user.save()
                .then(userData => {
                    res.status(201).json({
                        message: 'User Created Succesfully...',
                        userData
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        }
    });
});



router.delete('/:userId', (req, res) => {
    const userId = mongoose.Types.ObjectId(req.params.userId)

    User.deleteOne({ "_id": userId })
        .exec()
        .then(deletedUserStatus => {
            res.status(200).json({
                msg: 'User Deleted Succesfully...',
                deletedUserStatus
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
})



module.exports = router;