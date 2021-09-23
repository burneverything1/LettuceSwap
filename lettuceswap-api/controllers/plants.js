const plantsRouter = require('express').Router()
const Plant = require('../models/plant')
const PriceData = require('../models/pricedata')

plantsRouter.get('/', async (request, response) => {
    const plants = await Plant.find({}).populate('pricedata')
    response.json(plants)
})

const newPriceData = async (newPlant) => {
    // attach empty price data to new plant
    const plantPrices = new PriceData({
        bids: {},
        asks: {},
        plant: newPlant._id
    })
    const savedPriceData = await plantPrices.save()
    newPlant.priceData = savedPriceData._id
    const savedPlant = await newPlant.save()
    return savedPlant
}

plantsRouter.post('/', async (request, response, next) => {
    const body = request.body

    const plant = new Plant({
        name: body.name,
        weeksToHarvest: body.weeksToHarvest,
        priceData: null
    })

    try {
        let savedPlant = await plant.save()
        // create empty Price Data and attach
        savedPlant = await newPriceData(savedPlant)

        response.json(savedPlant)
    } catch(exception) {
        next(exception)
    }
})

module.exports = plantsRouter