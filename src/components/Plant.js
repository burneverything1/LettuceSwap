import React, { useRef } from 'react'
import Togglable from './Togglable'
import PriceForm from './PriceForm'

import priceService from '../services/prices'

const Plant = ({ plant }) => {

    const sendOffer = async (priceObject) => {
        priceFormRef.current.toggleVisibility()
        try {
            const savedPrice = await priceService.sendPrice(plant.priceData, priceObject)
            // do something with returned price
        } catch (exception){
            console.log(exception);
        }
    }

    const priceFormRef = useRef()

    return (
        <tr>
            <th>{plant.name}</th>
            <td>plant price data here</td>
            <td>
                <Togglable buttonLabel='Send Bid/Ask' ref={priceFormRef}>
                    <PriceForm sendOffer={sendOffer}/>
                </Togglable>
            </td>
        </tr>
    )
}

export default Plant