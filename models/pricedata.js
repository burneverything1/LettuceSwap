const mongoose = require('mongoose')

const priceDataSchema = new mongoose.Schema({
    bids: {
        type: Map,
        of: Number,
        required: true,
    },
    asks: {
        type: Map,
        of: Number,
        required: true
    },
    plant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant'
    }
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('PriceData', priceDataSchema)