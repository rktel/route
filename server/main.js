import { print } from '../imports/tools/tools'

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

const Savia_URI = '/V17/savia'
const Antapaccay_URI = '/V17/antapaccay'
const Exsa_URI = '/V17/exsa'
const Induamerica_URI = '/V17/induamerica'
const Servosa_URI = '/V17/servosa'
const Neptunia_URI = '/V17/neptunia'
const Dinet_URI = '/V17/dinet'
const Volvo_URI = '/V17/volvo'
const Savar_URI = '/V17/savar'

Meteor.startup(ns => {

    print('Meteor server Up')

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

    app.listen(14555);

})

