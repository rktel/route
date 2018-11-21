import { print } from '../imports/tools/tools'

const express = require('express')
const app = express()
app.use(express.json())

import { Savia } from '../imports/api/collections'

Meteor.startup(ns => {

    print('Meteor server Up')

    app.post('/V17/savia', Meteor.bindEnvironment((req, res) =>{
        print("REQ: " , req.body)
        Savia.insert(req.body, (error,id) => {
            if(!error){
                res.sendStatus(200)
            }
        })
    }))

    app.listen(14555);

})