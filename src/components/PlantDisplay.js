import React, { useState } from 'react'
import Plant from './Plant'

const PlantDisplay = ({ plants }) => {

    const makePlants = (plants) => {
        return plants.map(plant => {
            return <Plant plant={plant}/>
        })
    }

    return (
        <table>
            {makePlants(plants)}
        </table>
    )
}

export default PlantDisplay