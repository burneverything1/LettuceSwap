import React, { useState, useEffect, useRef } from 'react'
import Togglable from '../utility/Togglable'
import PriceForm from './PriceForm'
import PlantPriceDisplay from './PlantPriceDisplay'

import priceService from '../../services/prices'
import locationService from '../../services/location'

const Plant = ({ plant, notifyUser }) => {
    const [priceChartData, setPriceChartData] = useState([])

    const refreshPriceChart = () => {
        priceService
            .getChart(plant.priceData)
            .then(priceChartData => {
                setPriceChartData(priceChartData)
            })
    }

    useEffect(() => {
        refreshPriceChart()
    }, [])

    const sendOffer = async (priceObject) => {
        priceFormRef.current.toggleVisibility()     // close bid/ask form

        // check price is mult of 5
        let test_price = Number(priceObject.price)
        if (test_price % 5 !== 0){
            notifyUser('Please submit an offer in increment of 5 cents', 'red')
            return
        }
        
        locationService.sendLocation(plant.id)      // log location of client
        try {
            const sale_success = await priceService.sendPrice(plant.priceData, priceObject)
            if (sale_success.sale_happen.result){
                notifyUser(`successful sale @ ${sale_success.sale_happen.price} c/oz of ${plant.name}`, 'green')
            } else {
                notifyUser(`${priceObject.type} successful @ ${priceObject.price} c/oz of ${plant.name}`, 'green')
            }
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
                <Togglable buttonLabel='Send Bid/Ask' closeLabel='Cancel' ref={priceFormRef}>
                    <PriceForm sendOffer={sendOffer}/>
                </Togglable>
            </td>
        </tr>
    )
}

export default Plant