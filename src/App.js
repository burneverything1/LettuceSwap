import React, { useState, useEffect, useRef } from 'react'
import PlantForm from './components/PlantForm'
import Togglable from './components/Togglable'
import PlantDisplay from './components/PlantDisplay'
import ClimateTalk from './components/static/ClimateTalk'
import Header from './components/static/Header'
import Notification from './components/Notification'

import plantService from './services/plants'


const App = () => {
  const [plants, setPlants] = useState([])
  const [ notifMessage, setNotifMessage ] = useState(null)
  const [ notifType, setNotifType ] = useState('')

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

  const notifyUser = (message, type) => {
    setNotifMessage(message)
    setNotifType(type)
    setTimeout(() => {
        setNotifMessage(null)
    }, 3000)
}

  const plantFormRef = useRef()  

  return (
    <div>
      <Header/>
      <br/>
      <Notification message={notifMessage} type={notifType}/>
      <div>
        <PlantDisplay plants={plants} notifyUser={notifyUser}/>
        <br/>
        <Togglable buttonLabel='New Plant' ref={plantFormRef}>
          <PlantForm createPlant={createPlant}/>
        </Togglable>
      </div>
      <br/>
      <ClimateTalk/>
    </div>
  )
}

export default App;
