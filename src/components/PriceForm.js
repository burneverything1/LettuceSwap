import React, { useState } from 'react'
import priceService from '../services/prices'

const PriceForm = ({ plant }) => {
    const [newPrice, setNewPrice] = useState('')

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value)
    }

    return (
        <form>
            <select>
                <option value='bids'>Bid</option>
                <option value='asks'>Ask</option>
            </select>
            Price in cents/oz
                <input
                    type='number'
                    value={newPrice}
                    onChange={handlePriceChange}
                />
            <button type='submit'>Send</button>
        </form>
    )
}

export default PriceForm