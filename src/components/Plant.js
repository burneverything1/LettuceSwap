import React from 'react'

const Plant = ({ plant }) => {
    return (
        <tr>
            <th>{plant.name}</th>
            <td>plant price data here</td>
        </tr>
    )
}

export default Plant