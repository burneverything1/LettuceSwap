import React, { useState } from 'react'

const PriceForm = ({ sendPrice }) => {
    const [newPrice, setNewPrice] = useState('')

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value)
    }

    return (
        <div>
            <h2>Enter a new Bid/Ask</h2>

            <form>
                <div>Plant Name:

                </div>
            </form>
        </div>
    )
}