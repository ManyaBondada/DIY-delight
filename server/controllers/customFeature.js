import { pool } from '../config/database.js'

// get all features + info
const getFeatures = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM customfeatures ORDER BY category ASC')
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }

  export default {
    getFeatures
  }