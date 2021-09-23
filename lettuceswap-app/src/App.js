import React, { useState, useEffect, useRef } from 'react'
import PlantForm from './components/PlantForm'
import Togglable from './components/utility/Togglable'
import PlantDisplay from './components/market_prices/PlantDisplay'
import ClimateTalk from './components/static/ClimateTalk'
import Header from './components/static/Header'
import Notification from './components/utility/Notification'
import StatsDisplay from './components/market_statistics/StatsDisplay'

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
    }, 7000)
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
        <Togglable buttonLabel='New Plant' closeLabel='Cancel' ref={plantFormRef}>
          <PlantForm createPlant={createPlant}/>
        </Togglable>
        <br/>
        <StatsDisplay/>
        <br/>
      </div>
      <br/>
      <ClimateTalk/>
    </div>
  )
}

export default App;
