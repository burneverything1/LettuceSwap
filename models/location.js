const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    plantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlantId'
    }
})

locationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Location', locationSchema)