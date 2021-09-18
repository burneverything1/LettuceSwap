import React from 'react'

const PlantPriceDisplay = ({ priceData }) => {

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
            Bids: {createDisplay('bids', priceData.bids)}
            Asks: {createDisplay('asks', priceData.asks)}
        </div>
    )
}

export default PlantPriceDisplay