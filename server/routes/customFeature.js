import express from 'express'
import CustomFeatureController from '../controllers/customeFeature.js'

const router = express.Router()

router.get('/features', CustomFeatureController.getFeatures)

export default router