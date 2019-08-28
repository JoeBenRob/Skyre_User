const express = require('express');
const router = express.Router();
const axios = require('axios');
import passport from 'passport';

const citizen_url = "http://localhost:9001/core/citizen/"
const finance_url = "http://localhost:9001/core/finance/"
const mobile_url = "http://localhost:9001/core/mobile/"
const vehicle_url = "http://localhost:9001/core/anpr/"

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
            let forenames = (req.query.forenames ? "forenames=" + req.query.forenames + "&":"");
            let surname = (req.query.surname ? "surname=" + req.query.surname : "");
            let toSend = "" + forenames + surname;
            console.log(req.query.username);
            console.log("1 " + toSend);
            axios.get(`${citizen_url}${toSend}`, {
                headers: { username: `${req.query.username}` },
            })
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
            let forenames = (req.query.forenames ? "forenames=" + req.query.forenames + "&":"");
            let surname = (req.query.surname ? "surname=" + req.query.surname + "&":"");
            let citizenId = (req.query.citizenId ? "citizenId=" + req.query.citizenId + "&":"");
            let homeAddress = (req.query.homeAddress ? "homeAddress=" + req.query.homeAddress + "&":"");
            let dateOfBirth = (req.query.dateOfBirth ? "dateOfBirth=" + req.query.dateOfBirth + "&":"");
            let placeOfBirth = (req.query.placeOfBirth ? "placeOfBirth=" + req.query.placeOfBirth + "&":"");
            let sex = (req.query.sex ? "sex=" + req.query.sex:"");
            let toSend = "" + forenames + surname + citizenId + homeAddress + dateOfBirth + placeOfBirth + sex;

            axios.get(`${citizen_url_url}${toSend}`, {
                headers: { username: `${req.query.username}` },
            })
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
            let forenames = (req.query.forenames ? "forenames=" + req.query.forenames + "&":"");
            let surname = (req.query.surname ? "surname=" + req.query.surname : "");
            let toSend = "" + forenames + surname;
            console.log("22" + toSend);
            axios.get(`${finance_url}${toSend}`, {
                headers: { username: `${req.query.username}` },
            })
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
            let forenames = (req.query.forenames ? "forenames=" + req.query.forenames + "&":"");
            let surname = (req.query.surname ? "surname=" + req.query.surname : "");
            let toSend = "" + forenames + surname;
            console.log("MOBILE 1 " + toSend);
            axios.get(`${mobile_url}${toSend}`, {
                headers: { username: `${req.query.username}` },
            })
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
            let forenames = (req.query.forenames ? "forenames=" + req.query.forenames + "&":"");
            let surname = (req.query.surname ? "surname=" + req.query.surname : "");
            let toSend = "" + forenames + surname;

            axios.get(`${vehicle_url}${toSend}`, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
});

router.get('/getAssociates', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            let phoneNumber = (req.query.phoneNumber ? "phoneNumber=" + req.query.phoneNumber + "&":"");
            console.log("ASSOCIATE PHONE " + phoneNumber);
            axios.get(`http://localhost:9001/core/associate/${phoneNumber}`, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
})

router.get('/getVehicleLocation', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            let regNo = (req.query.vehicleRegistrationNo ? "vehicleRegistrationNo=" + req.query.vehicleRegistrationNo + "&":"");
            console.log("REG NO " + regNo);
            axios.get(`http://localhost:9001/core/vehicleLocation/${regNo}`, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
})

router.get('/getTransactions', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            let accountNumber = (req.query.accountNumber ? "accountNumber=" + req.query.accountNumber + "&":"");
            console.log("Account Number " + accountNumber);
            axios.get(`http://localhost:9001/core/transactions/${accountNumber}`, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
})

router.get('/getCitizenFromRegistration', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            let vehicleRegistrationNo = (req.query.vehicleRegistrationNo ? "vehicleRegistrationNo=" + req.query.vehicleRegistrationNo + "&":"");
            console.log("Vehicle Registration " + vehicleRegistrationNo);
            axios.get(`http://localhost:9001/core/citizenFromRegistration/${vehicleRegistrationNo}`, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
})

router.get('/getCases', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            axios.get(`http://localhost:9001/core/cases/`, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
})

router.post('/postCase', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info !== undefined) {
            console.log(info.message);
            console.log(info);
            res.status(401).send(info.message);
        } else {
            console.log("USERNAME" + req.query.username)
            axios.post(`http://localhost:9001/core/postCase`, req.body, {
                headers: { username: `${req.query.username}` },
            })
                .then(response => {
                    res.json(response.data);
                }).catch(err => {
                    console.log(err);
                });
        }
    })(req, res, next);
})

module.exports = router;