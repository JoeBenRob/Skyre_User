const express = require('express');
const router = express.Router();
const axios = require('axios');
import passport from 'passport';


router.get('/findUser/:entry', (req, res, next) => {
    // router.get('/findUser', (req, res, next) => {
    console.log("---1 " + req);
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        console.log("---2 " + req.params);
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info)
            res.status(401).send(info.message);
        } else {
            let appender = "";
            axios
                .get(`http://51.144.152.19:8081/Citizen/getCitizens?${appender}`)
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});


module.exports = router;