import React from 'react'
import { Bar } from 'react-chartjs-2'

const PlantPriceDisplay = ({ priceData }) => {
    // prepare data for display
    const prices = []
    const bid_data = []
    const ask_data = []

    for (const price in priceData.bids) {
        prices.push(price)
    }

    for (const price in priceData.asks) {
        prices.push(price)
    }
    const max = Math.max(prices)
    const min = Math.min(prices)

    const labels = []
    for (let i = min; i <= max; i + 5){
        labels.push(i)
    }

    for (let x in labels) {
        if (x in priceData.bids){
            bid_data.push(priceData.bids[x])
        } else {
            bid_data.push(0)
        }
        if (x in priceData.asks){
            ask_data.push(priceData.asks[x])
        } else {
            ask_data.push(0)
        }
    }

    const chart = {
        labels: labels,
        datasets: [{
            label: 'Bid Prices',
            data: bid_data
        }, {
            label: 'Ask Prices',
            data: ask_data
        }]
    }

    const createDisplay = (type, priceData) => {
        // must return an array to display properly
        const disp_arr = []
        for (const price_point in priceData) {
            disp_arr.push(`${priceData[price_point]} ${type} at ${price_point} Cents`)
        }
        return disp_arr
    }

    return (
        <div>
            <Bar data={chart}/>
        </div>
    )
}

export default PlantPriceDisplay