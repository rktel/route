/* COnexion a Coolcar GrupoQR, */
const http = require('https')

// const HOST_CARCOOL = 'dev.carcool.pe'
// const PATH_CARCOOL = '/gps-rest/api/gps-tracker'
const HOST_CARCOOL = 'gps-api.carcool.pe'
const PATH_CARCOOL = '/api/gps-tracker'
const METHOD_CARCOOL = 'POST'
/**TOken DEV */
// const TOKEN_GRUPO_QR = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZhYTk2NWJiNzVkZGUwZDUxNTBmMjk0NDA4NjhmZjA0OWZkYjcwYjE5NmE3Nzc0YmZhZTE5ZWMzZWE1NjQ0MjhhMzMyMjUyOWZhNjNjYmNjIn0.eyJhdWQiOiIxIiwianRpIjoiZmFhOTY1YmI3NWRkZTBkNTE1MGYyOTQ0MDg2OGZmMDQ5ZmRiNzBiMTk2YTc3NzRiZmFlMTllYzNlYTU2NDQyOGEzMzIyNTI5ZmE2M2NiY2MiLCJpYXQiOjE1ODg4MjAyMjksIm5iZiI6MTU4ODgyMDIyOSwiZXhwIjoxNjIwMzU2MjI5LCJzdWIiOiIxNyIsInNjb3BlcyI6W119.lKJ7kMTTjVQ29PAJTcHZPiK_7jNnRXujHcVYdmMyJXFk46pOWsaaAd1KdDe4zy9moKoOgPlD41DixK1OV9B5z7tuD7ZVlE3wSLzn86GDHFkXkvY-IvNrJjnMKp4pKKXrYDD5uWQbtpqXyBuX8wcYfv3LUlZEKTrgaQ8eLzvO5Kj8j_z8WiaCvy4RTAK7BEpVmZa3EV8tvTduTq4qkBL-kqn8ZQIDIQ1bLhtnmmCpKjbz1JekbMKzrVkZarJZwbenwUzY6cJB-unMOO0dEhxTr3zqww7J0xxbxZTwwK76bgi0N_C__E6sEE_Ohg3DLRZrdiCLHIj1BtnomWJpKQft8Bu87kbp_IwQ9dTao3bIkEhC8dWpieJ8g-UzqTMzKZOhTe3hE3iDEXLzvfURhRDtiU4QBHSzF0nGc2cKZTKZXw8n1t0_F_AHRv2HJFNXcLzIAZx_eCMhyuI4i3jfjzYNu8293gfQTe7rsEt8ssagH6gaiHqObpC6qGdYN9-OBo0ZmSlTVsPn9LSAP_RyhecAP9C36S7G3mp9vM29CY0HJZ3HVNvZYnqsDj9iS45jNnnOC8ndcf4ERFDUaGlFJXseWgDR_Nrx0_Sw_KOhGVHzJXX-Z_KhgtYRj4s1jZQDuU0TgNK6MZwtyni-NZhvipD8tRyS8kh-XTZw1zy551EWVvo'
/*Token PRODUC */
const TOKEN_GRUPO_QR = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhkOGNhYTNhNWVlNTA5N2U5MmM4YzIwM2NmNmVhNjg1MzU0MTQ3ZGU0MmYzMGRmOTI2ZGNjYmFmODg4ZWU5ZWRkYjc0YTBlMTMzMjdkMGU2In0.eyJhdWQiOiIxIiwianRpIjoiOGQ4Y2FhM2E1ZWU1MDk3ZTkyYzhjMjAzY2Y2ZWE2ODUzNTQxNDdkZTQyZjMwZGY5MjZkY2NiYWY4ODhlZTllZGRiNzRhMGUxMzMyN2QwZTYiLCJpYXQiOjE1ODk1NzU5NTEsIm5iZiI6MTU4OTU3NTk1MSwiZXhwIjoxNjIxMTExOTUxLCJzdWIiOiIxNyIsInNjb3BlcyI6W119.jvbJYwA_nukBOn_9PHTcJhLMPCSATgEO0PtahHoq64qtC9vVfnfFQ1JDg6YfPlfIRWeOhN0-jqqn5LwynzbCYFBIK6tpKBxz4utmb54xh9Nf2bOyWMHu6KN2jMaUssXTTNpxw1CodWfbb5UfEslaTijd73MdBloMdhFNQVkZc39YCNT48UWzS0UYq6xYnJObBRtEvH07m88ve5vn1lvVK04UqBNQmYV8MietgAHepLVy0hyokRyaT1-y4NLAUYS-zuiS1g3_a1ceVKnhSYdLdVQtyVHfU4p7EV36pRNEqFlA_p7sp8SQlyIv_7bl9GcScOu6Ss3ad5cuuNg9lR04dD4HfhORcD-VR_x2OspCySqGRxDFhpa4-S-x1-i-eJbIp0js2e8rsbIdjgDdPGfum7XF14hqcR-1Q_m8NW5as1GYP0KF7OoAhOvm7zGIDB3DSmwalMKTYepzwDKnOhd3Bk50e0QitdsSxt4-agj-fvNi9I-tBFdwzgjIeQMvW87ehY1Lp2N5ooqQXdOZ9cqyEMyOpCLherByfx5h3MtMVeGxkfSPOa0NnyBq92nM6yiVoybM2yyu3IalH-j8TfN9iNn4GwlKzTPfQiawnfXo6mcySyZN9VecnV35St98FXByMPEUwh3vux8UrSLTR1714I97W3-4EBblpVsa1hKtdh8'

/**¿end */

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
                res.sendStatus(200)
            }
        })
    }))
    app.post(GrupoQR_URI, Meteor.bindEnvironment((req, res) => {
        GrupoQR.insert(req.body, (error, id) => {
            if (!error) {
                 /**INI */
                 let data = req.body.events[0]

                 let isodate = data.created
                 let date = new Date(isodate)
                 date = date.getTime() / 1000
                 let mobile = data.device

                 mobile = mobile.match(/\d+/g); 

                 


                //  console.log('device_timestamp:', date)
                //  console.log('lat:', data.location.latitude)
                //  console.log('lng:', data.location.longitude)
                //  console.log('velocity:', data.location.speed)
                //  console.log('imei:', mobile[0])
                //  console.log('plate:', data.vehicle)
 
                 let digitals = data.inputs.digital
                 let ignitions = digitals.filter(item => {
                     return item.type == 13
                 })
                 if (ignitions.length == 1) {
                     let ignition = ignitions[0]
                     if (ignition.value == true) {
                         //console.log('engine:', 1)
                         sendDataToCoolcar(data.location.longitude, data.location.latitude, mobile[0], data.vehicle, data.location.speed, 1, date, TOKEN_GRUPO_QR)
                     }
 
                     else {
                         //console.log('engine:', 0)
                         sendDataToCoolcar(data.location.longitude, data.location.latitude, mobile[0], data.vehicle, data.location.speed, 0, date, TOKEN_GRUPO_QR)
                     }
 
                 }
             
             /**END */

                res.sendStatus(200)
            }
        })
    }))
    app.listen(14555);

})


function sendDataToCoolcar(_lng, _lat, _imei, _plate, _velocity, _engine, _device_timestamp, _TOKEN) {
    const postData = JSON.stringify(
        {
            "lng": _lng,
            "lat": _lat,
            "imei": _imei,
            "plate": _plate,
            "velocity": _velocity,
            "engine": _engine,
            "device_timestamp": _device_timestamp
        }
    );

    const options = {
        host: HOST_CARCOOL,
        path: PATH_CARCOOL,
        method: METHOD_CARCOOL,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Bearer ' + _TOKEN
        }
    };

    const req_ = http.request(options, (res_) => {

        res_.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res_.on('end', () => {
            // console.log('No more data in response.');
        });
    });

    req_.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // Write data to request body
    req_.write(postData);
    req_.end();
}