
const punt = require('punt');
const socClient = punt.connect('10.12.1.41:5000');
function sendData(data) {
    socClient.send(data)
}
var server = punt.bind('0.0.0.0:14555');
server.on('message', function (msg) {
    console.log(msg);
    sendData(msg)
});


const express = require('express')
const app = express()

app.use(express.json())

import { Savia } from '../imports/api/collections'
import { Antapaccay } from '../imports/api/collections'
import { Exsa } from '../imports/api/collections'
import { Induamerica } from '../imports/api/collections'
import { Servosa } from '../imports/api/collections'
import { Neptunia } from '../imports/api/collections'
import { Dinet } from '../imports/api/collections'
import { Volvo } from '../imports/api/collections'
import { Savar } from '../imports/api/collections'
import { Minsur } from '../imports/api/collections'
import { Chingudi } from '../imports/api/collections'
import { Pluton } from '../imports/api/collections'
import { Atlantic } from '../imports/api/collections'
import { GrupoQR } from '../imports/api/collections'


const Savia_URI = '/V17/savia'
const Antapaccay_URI = '/V17/antapaccay'
const Exsa_URI = '/V17/exsa'
const Induamerica_URI = '/V17/induamerica'
const Servosa_URI = '/V17/servosa'
const Neptunia_URI = '/V17/neptunia'
const Dinet_URI = '/V17/dinet'
const Volvo_URI = '/V17/volvo'
const Savar_URI = '/V17/savar'
const Minsur_URI = '/V17/minsur'


// Agregado el 25/09/2019
const SOC_Alerts_URI = '/v17/socalerts'
// Agregado el 27/09/2019
const Chingudi_URI = '/v17/chingudi'
// Agregado el 11/11/2019
const Pluton_URI = '/v17/pluton'
// Agregado el 11/12/2019
const Atlantic_URI = '/v17/atlantic'
// Agregado el 13/05/2020
const GrupoQR_URI = '/V17/grupoqr'

Meteor.startup(ns => {

    console.log('Meteor server Up')

    app.post(Savia_URI, Meteor.bindEnvironment((req, res) => {
        Savia.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Antapaccay_URI, Meteor.bindEnvironment((req, res) => {
        Antapaccay.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Exsa_URI, Meteor.bindEnvironment((req, res) => {
        Exsa.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Induamerica_URI, Meteor.bindEnvironment((req, res) => {
        Induamerica.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Servosa_URI, Meteor.bindEnvironment((req, res) => {

        Servosa.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)

            }
        })
    }))
    app.post(Neptunia_URI, Meteor.bindEnvironment((req, res) => {
        Neptunia.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Dinet_URI, Meteor.bindEnvironment((req, res) => {
        Dinet.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Volvo_URI, Meteor.bindEnvironment((req, res) => {
        Volvo.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Savar_URI, Meteor.bindEnvironment((req, res) => {
        Savar.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Minsur_URI, Meteor.bindEnvironment((req, res) => {
        Minsur.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(SOC_Alerts_URI, Meteor.bindEnvironment((req, res) => {
        // console.log("SOC_ALERTS:", req.body.alerts[0])
        sendData(req.body)
        res.sendStatus(200)
    }))
    app.post(Chingudi_URI, Meteor.bindEnvironment((req, res) => {
        Chingudi.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Pluton_URI, Meteor.bindEnvironment((req, res) => {
        Pluton.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.post(Atlantic_URI, Meteor.bindEnvironment((req, res) => {
        Atlantic.insert(req.body, (error, id) => {
            if (!error) {
                let data = req.body.events[0]
                let isodate = data.created
                let date = new Date(isodate)
                console.log(date)
                console.log(date.getTime() / 1000)

                console.log(data.created)
                console.log(data.location.latitude)
                console.log(data.location.longitude)
                console.log(data.location.speed)
                console.log(data.inputs.digital)
                console.log(data.device)
                console.log(data.vehicle)

                res.sendStatus(200)
            }
        })
    }))
    app.post(GrupoQR_URI, Meteor.bindEnvironment((req, res) => {
        GrupoQR.insert(req.body, (error, id) => {
            if (!error) {
                res.sendStatus(200)
            }
        })
    }))
    app.listen(14555);

})


