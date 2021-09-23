const locationRouter = require('express').Router()
const LocationData = require('../models/location.js')

locationRouter.get('/', async (request, response) => {
    const locations = await LocationData.find({})

    const payload = {}

    locations.forEach(location => {
        let loc_string = `${location.city}, ${location.state}`
        if (loc_string in payload) {
            payload[loc_string] += 1
        } else {
            payload[loc_string] = 1
        }
    })
    response.json(payload)
})

locationRouter.post('/', async (request, response, next) => {
    const body = request.body

    const location = new LocationData({
        time: new Date(),
        city: body.city,
        state: body.state,
        plantId: body.plant
    })

    try {
        await location.save()
    } catch(exception){
        next(exception)
    }
})

module.exports = locationRouter