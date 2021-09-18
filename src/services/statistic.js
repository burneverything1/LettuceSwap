import axios from 'axios'
const baseUrl = '/api/statistic'

const getStats = async () => {
    const response = await axios.get(baseUrl)
    return response.data[0]
}

export default {
    getStats
}