import React from 'react'
import Plant from './Plant'

const PlantDisplay = ({ plants, notifyUser }) => {

    const makePlants = (plants) => {
        return plants.map(plant => {
            return <Plant plant={plant} notifyUser={notifyUser}/>
        })
    }

    return (
        <div>
            <h2>Produce Market Prices</h2>
            <table>
                {makePlants(plants)}
            </table>
        </div>
    )
}

export default PlantDisplay