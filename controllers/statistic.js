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

statisticRouter.post('/sale', async (request, response, next) => {
    const body = request.body

    let statistic = await Statistic.find({})
    statistic = statistic[0]
    
    // update stats with sale
    statistic.totalSales += body.sale_count
    const update_stats = await Statistic.findByIdAndUpdate(statistic._id, statistic, { new: true })
    response.json(update_stats)
})

module.exports = statisticRouter