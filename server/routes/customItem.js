import express from 'express'
import CustomItemController from '../controllers/customItem.js'

const router = express.Router()

// get
router.get('/items', CustomItemController.index)
router.get('/items/:itemId', CustomItemController.show)

// create, update, delete an item
router.post('/items', CustomItemController.create)
router.patch('/items/:id', CustomItemController.update)
router.delete('/items/:id', CustomItemController.delete)

export default router