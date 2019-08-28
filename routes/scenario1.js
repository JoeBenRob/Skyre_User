const express = require('express');
const router = express.Router();
const axios = require('axios');
import passport from 'passport';
// local
//const citizen_url = "http://localhost:9001/core/citizen/"
//const finance_url = "http://localhost:9001/core/finance/"
//const mobile_url = "http://localhost:9001/core/mobile/"
//const vehicle_url = "http://localhost:9001/core/anpr/"

const citizen_url = "http://core:9001/core/citizen/"
const finance_url = "http://core:9001/core/finance/"
const mobile_url = "http://core:9001/core/mobile/"
const vehicle_url = "http://core:9001/core/anpr/"

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
            console.log("1 " + toSend);
            axios.get(`${citizen_url}${toSend}`)
                .then(response => {
                    console.log("2 " + response.data);
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
            let toSend = "" + iforenames + isurname + icitizenId + ihomeAddress + idateOfBirth + iplaceOfBirth + isex;

            axios.get(`${citizen_url_url}${toSend}`)
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});

router.get('/getFinance', (req, res, next) => {
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
            let surname = "surname=" + req.query.surname + "&";
            let toSend = "" + forenames + surname;
            console.log("22" + toSend);
            axios.get(`${finance_url}${toSend}`)
                .then(response => {
                    console.log("MOBILE")
                    for (let i = 0; i < response.data.length; i++) {
                        console.log(response.data[i]);
                    }
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});

router.get('/getMobile', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            let iforenames = "forenames=" + req.query.forenames + "&";
            let isurname = "surname=" + req.query.surname;
            let toSend = "" + iforenames + isurname;
            console.log("MOBILE 1 " + toSend);
            axios.get(`${mobile_url}${toSend}`)
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});

router.get('/getVehicle', (req, res, next) => {
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
            let isurname = "surname=" + req.query.surname;
            let toSend = "" + iforenames + isurname;

            axios.get(`${vehicle_url}${toSend}`)
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});

module.exports = router;
