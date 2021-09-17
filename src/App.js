import React, { useState, useEffect } from 'react'
import PlantForm from './components/PlantForm'

import plantService from './services/plants'

const App = () => {

  const createPlant = async (plantObject) => {
    try {
      const savedPlant = await plantService.create(plantObject)
      // do something with plant
    } catch (exception){
      console.log(exception);
    }
  } 

  return (
    <div>
      <h1>LettuceSwap</h1>
      <PlantForm createPlant={createPlant}/>
    </div>
  )
}

export default App;
