const router = require('express').Router()
const Plant = require('../models/datum')

router.get('/', (request, response) => {
    Plant
        .find({})
        .then(data => {
            response.json(data)
        })
})

router.post('/', (request, response) => {
    const data = new Plant(request.body)

    data
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = router