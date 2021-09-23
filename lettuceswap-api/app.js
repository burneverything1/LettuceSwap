const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')

const plantsRouter = require('./controllers/plants')
const priceRouter = require('./controllers/pricedata')
const locationRouter = require('./controllers/location')
const statisticRouter = require('./controllers/statistic')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false, useCreateIndex: true
})
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/plants', plantsRouter)
app.use('/api/prices', priceRouter)
app.use('/api/location', locationRouter)
app.use('/api/statistic', statisticRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app