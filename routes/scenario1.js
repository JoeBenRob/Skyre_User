const express = require('express');
const router = express.Router();
const axios = require('axios');
import passport from 'passport';


router.get('/getCitizens', (req, res, next) => {
    console.log("---1 " + req.query.forenames);
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        console.log("---1 " + req.query.forenames);
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
            // let icitizenId = "citizenId=" + req.query.citizenId + "&";
            // let ihomeAddress = "homeAddress=" + req.query.homeAddress + "&";
            // let idateOfBirth = "dateOfBirth=" + req.query.dateOfBirth + "&";
            // let iplaceOfBirth = "placeOfBirth=" + req.query.placeOfBirth + "&";
            // let isex = "sex=" + req.query.sex;
            let appender = "" + iforenames + isurname;
            console.log("-----3-----" + appender);
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