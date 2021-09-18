const priceRouter = require('express').Router()
const PriceData = require('../models/pricedata')
const CheckSale = require('../services/checksale')

priceRouter.get('/', async (request, response) => {
    const prices = await PriceData.find({})
    response.json(prices)
})

priceRouter.get('/:id', async (request, response, next) => {
    try {
        const price = await PriceData.findById(request.params.id)
        if (price) {
            response.json(price)
        } else {
            response.status(404).end()
        }
    } catch(exception) {
        next(exception)
    }
})

priceRouter.get('/chart/:id', async (request, response, next) => {
    try {
        let price_data = await PriceData.findById(request.params.id)
        if (price_data) {
            response.json(PriceChartData(price_data))
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
    // get bid or ask price map
    let plantprices = price_data.get(`${body.type}`)
    // if prices exist, increase number of bid by 1
    if (plantprices.get(body.price)){
        plantprices.set(body.price, plantprices.get(body.price) + 1)
    } else {
        plantprices.set(body.price, 1)
    }

    try{
        await price_data.save()
        let sale_happen = await CheckSale.CheckSale(request.params.id)       // check if sale happens
        let saved_data = await price_data.save()
        response.json({
            saved_data, sale_happen
        })      // send back boolean on sale success
    } catch(exception){
        next(exception)
    }
})

const PriceChartData = (priceData) => {
    // prepare data for display
    const prices = []
    const bid_data = []
    const ask_data = []

    priceData.bids.forEach((value, key) => prices.push(parseInt(key)))
    priceData.asks.forEach((value, key) => prices.push(parseInt(key)))
    const max = Math.max(...prices)
    const min = Math.min(...prices)

    const labels = []
    for (let i = min; i <= max; i = i + 5){
        labels.push(i)
    }

    labels.forEach(label => {
        let num = String(label)
        if (priceData.bids.has(num)){
            bid_data.push(priceData.bids.get(num))
        } else {
            bid_data.push(0)
        }

        if (priceData.asks.has(num)){
            ask_data.push(priceData.asks.get(num))
        } else {
            ask_data.push(0)
        }
    })

    return {
        labels: labels,
        bid_data: bid_data,
        ask_data: ask_data
    }
}

module.exports = priceRouter