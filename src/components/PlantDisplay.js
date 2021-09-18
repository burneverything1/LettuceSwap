import React from 'react'
import Plant from './Plant'

const PlantDisplay = ({ plants }) => {

    const makePlants = (plants) => {
        return plants.map(plant => {
            return <Plant plant={plant}/>
        })
    }

    return (
        <div>
            <h3>Plant Market Prices</h3>
            <table>
                {makePlants(plants)}
            </table>
        </div>
    )
}

export default PlantDisplay