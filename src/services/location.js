import axios from 'axios'
const baseUrl = '/api/location'

const sendLocation = async (plantId) => {
    const response = await axios.get('https://geolocation-db.com/json/')
    const payload = {
        city: response.data.city,
        state: response.data.state,
        plant: plantId,
    }
    await axios.post(baseUrl, payload)
}

export default {
    sendLocation
}