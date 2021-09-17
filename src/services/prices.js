import axios from 'axios'
const baseUrl = '/api/prices'

const sendPrice = async (id, priceOffer) => {
    const response = await axios.put(`${baseUrl}/${id}`, priceOffer)
    return response.data
}

export default {
    sendPrice
}