const locationRouter = require('express').Router()
const LocationData = require('../models/location.js')

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