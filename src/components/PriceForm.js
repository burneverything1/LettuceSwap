import React, { useState } from 'react'

const PriceForm = ({ sendOffer }) => {
    const [newPrice, setNewPrice] = useState('')
    const [offerType, setOfferType] = useState('bids')

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value)
    }

    const handleTypeChange = (event) => {
        setOfferType(event.target.value)
    }

    const sendPrice = (event) => {
        event.preventDefault()
        sendOffer({
            type: offerType,
            price: String(newPrice)
        })

        setNewPrice('')
        setOfferType('bids')
    }

    return (
        <form onSubmit={sendPrice}>
            <select
                value={offerType}
                onChange={handleTypeChange}
            >
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