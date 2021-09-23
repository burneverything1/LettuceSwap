const statisticRouter = require('express').Router()
const Statistic = require('../models/statistic')

statisticRouter.get('/', async (request, response) => {
    const statistic = await Statistic.find({})
    if (statistic.length === 0) {
        const initial_stat = new Statistic({
            totalSales: 0,
            totalBids: 0,
            totalAsks: 0
        })

        await initial_stat.save()
    }

    response.json(statistic)
})

module.exports = statisticRouter