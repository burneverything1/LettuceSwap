const mongoose = require('mongoose')

const statisticSchema = new mongoose.Schema({
    totalSales: {
        type: Number,
        required: true
    },
    totalBids: {
        type: Number,
        required: true
    },
    totalAsks: {
        type: Number,
        required: true
    }
})

statisticSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Statistic', statisticSchema)