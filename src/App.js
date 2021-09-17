import React, { useState, useEffect, useRef } from 'react'
import PlantForm from './components/PlantForm'
import Togglable from './components/Togglable'

import plantService from './services/plants'

const App = () => {

  const createPlant = async (plantObject) => {
    plantFormRef.current.toggleVisibility()
    try {
      const savedPlant = await plantService.create(plantObject)
      // do something with plant
    } catch (exception){
      console.log(exception);
    }
  }

  const plantFormRef = useRef()

  return (
    <div>
      <h1>LettuceSwap</h1>
      <Togglable buttonLabel='New Plant' ref={plantFormRef}>
        <PlantForm createPlant={createPlant}/>
      </Togglable>
    </div>
  )
}

export default App;
