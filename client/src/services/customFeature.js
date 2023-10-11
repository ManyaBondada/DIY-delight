import axios from 'axios'

// get 
const getFeatures = () => axios.get('/api/features')

export default{
    getFeatures
}