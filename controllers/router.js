const router = require('express').Router()
const Datum = require('../models/datum')

router.get('/', (request, response) => {
    Datum
        .find({})
        .then(data => {
            response.json(data)
        })
})

router.post('/', (request, response) => {
    const data = new Datum(request.body)

    data
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = router