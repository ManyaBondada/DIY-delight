import express from 'express'
import CustomFeatureController from '../controllers/customFeature.js'

const router = express.Router()

router.get('/features', CustomFeatureController.getFeatures)

export default router