import React from 'react'
import { Bar } from 'react-chartjs-2'

const PlantPriceDisplay = ({ priceData }) => {

    const bid_labels = []
    const bid_data = []
    for (const price in priceData.bids) {
        bid_labels.push(price)
        bid_data.push(priceData.bids[price])
    }

    const ask_lables = []
    const ask_data = []
    for (const price in priceData.bids) {
        ask_lables.push(price)
        ask_data.push(priceData.asks[price])
    }


    const bid_chart = {
        labels: bid_labels,
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
            <Bar data={bid_chart}/>
        </div>
    )
}

export default PlantPriceDisplay