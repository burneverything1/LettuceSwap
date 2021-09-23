import React from 'react'
import { Bar } from 'react-chartjs-2'

const PlantPriceDisplay = ({ priceChartData }) => {
    const chart = {
        labels: priceChartData.labels,
        datasets: [{
            label: 'Bids',
            data: priceChartData.bid_data,
            backgroundColor: 'rgb(34,139,34)'
        }, {
            label: 'Asks',
            data: priceChartData.ask_data,
            backgroundColor: 'rgb(220,20,60)'
        }]
    }

    return (
        <div>
            <Bar data={chart}/>
        </div>
    )
}

export default PlantPriceDisplay