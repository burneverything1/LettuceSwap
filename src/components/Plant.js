import React from 'react'
import Togglable from './Togglable'
import PriceForm from './PriceForm'

const Plant = ({ plant }) => {
    return (
        <tr>
            <th>{plant.name}</th>
            <td>plant price data here</td>
            <td>
                <Togglable buttonLabel='Send Bid/Ask'>
                    <PriceForm plant={plant}/>
                </Togglable>
            </td>
        </tr>
    )
}

export default Plant