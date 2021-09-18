import React, { useState, useEffect, useRef } from 'react'
import Togglable from './Togglable'
import PriceForm from './PriceForm'
import PlantPriceDisplay from './PlantPriceDisplay'

import priceService from '../services/prices'

const Plant = ({ plant, notifyUser }) => {
    const [priceChartData, setPriceChartData] = useState([])

    const refreshPriceChart = () => {
        priceService
            .getChart(plant.priceData)
            .then(priceChartData => {
                console.log(priceChartData);
                setPriceChartData(priceChartData)
            })
    }

    useEffect(() => {
        refreshPriceChart()
    }, [])

    const sendOffer = async (priceObject) => {
        priceFormRef.current.toggleVisibility()
        try {
            await priceService.sendPrice(plant.priceData, priceObject)
            notifyUser('sale success', 'green')
            refreshPriceChart()
        } catch (exception){
            console.log(exception);
        }
    }

    const priceFormRef = useRef()

    return (
        <tr>
            <th>{plant.name}</th>
            <td><PlantPriceDisplay priceChartData={priceChartData}/></td>
            <td>
                <Togglable buttonLabel='Send Bid/Ask' ref={priceFormRef}>
                    <PriceForm sendOffer={sendOffer}/>
                </Togglable>
            </td>
        </tr>
    )
}

export default Plant