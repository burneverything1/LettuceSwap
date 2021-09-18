import React, { useState, useEffect, useRef } from 'react'
import PlantForm from './components/PlantForm'
import Togglable from './components/Togglable'
import PlantDisplay from './components/PlantDisplay'

import plantService from './services/plants'

const App = () => {
  const [plants, setPlants] = useState([])

  // populate on load
  useEffect(() => {
    plantService
      .getAll()
      .then(initialPlants => {
        setPlants(initialPlants)
      })
  }, [])

  const createPlant = async (plantObject) => {
    plantFormRef.current.toggleVisibility()
    try {
      const savedPlant = await plantService.create(plantObject)
      setPlants(plants.concat(savedPlant))
    } catch (exception){
      console.log(exception);
    }
  }

  const plantFormRef = useRef()

  return (
    <div>
      <h1>LettuceSwap</h1>
      <PlantDisplay plants={plants}/>
      <Togglable buttonLabel='New Plant' ref={plantFormRef}>
        <PlantForm createPlant={createPlant}/>
      </Togglable>
    </div>
  )
}

export default App;
