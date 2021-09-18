import axios from 'axios'
const baseUrl = '/api/prices'

const getPrice = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const getChart = async (id) => {
    const response = await axios.get(`${baseUrl}/chart/${id}`)
    return response.data
}

const sendPrice = async (id, priceOffer) => {
    const response = await axios.put(`${baseUrl}/${id}`, priceOffer)
    console.log(response.data);
    return response.data
}

export default {
    getPrice, sendPrice, getChart
}