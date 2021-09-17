const priceRouter = require('express').Router()
const PriceData = require('../models/pricedata')

priceRouter.get('/', async (request, response) => {
    const prices = await PriceData.find({})
    response.json(prices)
})

priceRouter.get('/:id', async (request, response, next) => {
    try {
        const price = await PriceData.findById(request.params.id)
        if (price) {
            response.json(note)
        } else {
            response.status(404).end()
        }
    } catch(exception) {
        next(exception)
    }
})

priceRouter.put('/:id', async (request, response, next) => {
    // bidding and selling functions
    const body = request.body

    let price_data = await PriceData.findById(request.params.id)
    console.log(price_data);
    // get bid or ask price map
    let plantprices = price_data.get(`${body.type}`)
    // if prices exist, increase number of bid by 1
    if (plantprices.get(body.price)){
        plantprices.set(body.price, plantprices.get(body.price) + 1)
    } else {
        plantprices.set(body.price, 1)
    }

    try{
        const savedPrice = await price_data.save()
        response.json(savedPrice)
    } catch(exception){
        next(exception)
    }
})

module.exports = priceRouter