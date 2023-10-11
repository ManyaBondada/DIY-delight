import axios from 'axios'

// get 
const getItems = () => axios.get('/api/items')
const getItemById = (id) => axios.get(`/api/items/${id}`)

// create, update, delete
const createItem = (item) => request('POST', '/api/items', item)
const updateItem = (item) => request('PATCH', `/api/items/${item.id}`, item)
const deleteItem = (itemId) => request('DELETE', `/api/items/${itemId}`)

export default {
    getItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}
