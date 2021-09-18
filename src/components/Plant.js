import React, { useState, useEffect, useRef } from 'react'
import Togglable from './Togglable'
import PriceForm from './PriceForm'
import PlantPriceDisplay from './PlantPriceDisplay'

import priceService from '../services/prices'

const Plant = ({ plant }) => {
    const [priceData, setPriceData] = useState([])

    useEffect(() => {
        priceService
            .getPrice(plant.priceData)
            .then(priceData => {
                setPriceData(priceData)
            })
    }, [])

    const sendOffer = async (priceObject) => {
        priceFormRef.current.toggleVisibility()
        try {
            const savedPrice = await priceService.sendPrice(plant.priceData, priceObject)
            setPriceData(savedPrice)
        } catch (exception){
            console.log(exception);
        }
    }

    const priceFormRef = useRef()

    return (
        <tr>
            <th>{plant.name}</th>
            <td><PlantPriceDisplay priceData={priceData}/></td>
            <td>
                <Togglable buttonLabel='Send Bid/Ask' ref={priceFormRef}>
                    <PriceForm sendOffer={sendOffer}/>
                </Togglable>
            </td>
        </tr>
    )
}

export default Plant