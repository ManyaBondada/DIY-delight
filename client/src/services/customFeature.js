import axios from 'axios'

// get 
const getFeatures = () => axios.get('/api/features')
const getFeaturesById = (id) => axios.get(`/api/features/${id}`)


export default{
    getFeatures,
    getFeaturesById
}