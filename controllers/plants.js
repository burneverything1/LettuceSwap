const plantsRouter = require('express').Router()
const Plant = require('../models/plant')
const PriceData = require('../models/pricedata')

plantsRouter.get('/', async (request, response) => {
    const plants = await Plant.find({}).populate('pricedata')
    response.json(plants)
})

plantsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const plant = new Plant({
        name: body.name,
        weeksToHarvest: body.weeksToHarvest
    })

    try {
        let savedPlant = await plant.save()
        // create new price data for new plant
        const plantPrices = new PriceData({
            plant: savedPlant._id,
        })
        savedPlant.PriceData = plantPrices._id
        savedPlant = await savedPlant.save()

        response.json(savedPlant)
    } catch(exception) {
        next(exception)
    }
})

module.exports = plantsRouter