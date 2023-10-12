import axios from 'axios'

// get 
const getItems = () => axios.get('/api/items')
const getItemById = (id) => axios.get(`/api/items/${id}`)

// create, update, delete
const createItem = (item) => axios.post('/api/items', item)
const updateItem = (id, item) => axios.patch(`/api/items/${id}`, item)
const deleteItem = (id) => axios.delete(`/api/items/${id}`)

export default {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}
