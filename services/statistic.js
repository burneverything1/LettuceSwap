const Statistic = require('../models/statistic')

const addSale = async () => {
    let statistic = await Statistic.find({})
    statistic = statistic[0]
    
    // update stats with sale
    statistic.totalSales += 1
    const update_stats = await Statistic.findByIdAndUpdate(statistic._id, statistic, { new: true })
    return update_stats
}

const addBid = async () => {
    let statistic = await Statistic.find({})
    statistic = statistic[0]
    
    // update stats with sale
    statistic.totalBids += 1
    const update_stats = await Statistic.findByIdAndUpdate(statistic._id, statistic, { new: true })
    return update_stats
}

const addAsk = async () => {
    let statistic = await Statistic.find({})
    statistic = statistic[0]
    
    // update stats with sale
    statistic.totalAsks += 1
    const update_stats = await Statistic.findByIdAndUpdate(statistic._id, statistic, { new: true })
    return update_stats
}

module.exports = {
    addSale, addBid, addAsk
}