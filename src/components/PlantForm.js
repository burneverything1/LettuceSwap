import React, { useState } from 'react'

const PlantForm = ({ createPlant }) => {
    const [newName, setNewName] = useState('')
    const [newWeeks, setNewWeeks] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleWeeksChange = (event) => {
        setNewWeeks(event.target.value)
    }

    const addPlant = (event) => {
        event.preventDefault()
        createPlant({
            name: newName,
            weeksToHarvest: newWeeks,
        })

        setNewName('')
        setNewWeeks('')
    }

    return (
        <div>
            <h2>Enter a new Plant</h2>

            <form onSubmit={addPlant}>
                <div>Plant Name: 
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div># of Weeks until Harvest:                     
                    <input
                        type='number'
                        value={newWeeks}
                        onChange={handleWeeksChange}
                    />
                </div>
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default PlantForm