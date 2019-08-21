const express = require('express');
const router = express.Router();
const axios = require('axios');
import passport from 'passport';

router.get('/getBasicCitizens', (req, res, next) => {

    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info)
            res.status(401).send(info.message);
        } else {
            let forenames = "forenames=" + req.query.forenames + "&";
            let surname = "surname=" + req.query.surname;
            let toSend = "" + forenames + surname;
            axios.get(`http://52.137.47.18:8081/Citizen/getCitizens?${toSend}`)
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});

router.get('/getAdvCitizens', (req, res, next) => {

    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info)
            res.status(401).send(info.message);
        } else {
            let iforenames = "forenames=" + req.query.forenames + "&";
            let isurname = "surname=" + req.query.surname + "&";
            let icitizenId = "citizenId=" + req.query.citizenId + "&";
            let ihomeAddress = "homeAddress=" + req.query.homeAddress + "&";
            let idateOfBirth = "dateOfBirth=" + req.query.dateOfBirth + "&";
            let iplaceOfBirth = "placeOfBirth=" + req.query.placeOfBirth + "&";
            let isex = "sex=" + req.query.sex;
            let appender = "" + iforenames + isurname + icitizenId + ihomeAddress + idateOfBirth + iplaceOfBirth + isex;
            console.log(appender);
            axios.get(`http://52.137.47.18:8081/Citizen/getCitizens?${appender}`)
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});


module.exports = router;