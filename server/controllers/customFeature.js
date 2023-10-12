import { pool } from '../config/database.js'

// get all features + info
const getFeatures = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM customfeature ORDER BY category ASC')
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }

 // get feature by id
 const getFeatureById = async (req, res) => {
  try {
    const id = req.params.id
    const selectQuery = `SELECT category, feature, price, image FROM customfeature WHERE id = ${id}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

  export default {
    getFeatures,
    getFeatureById
  }