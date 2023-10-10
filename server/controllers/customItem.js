import { pool } from '../config/database.js'

// get all item combos
const getItems = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM customitem ORDER BY id ASC')
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }

// get a specific item combo based on id
const getItemById = async (req, res) => {
    try {
      const itemId = req.params.itemId
      const selectQuery = `SELECT color, model, name FROM customitem WHERE id = ${itemId}`
      const results = await pool.query(selectQuery)
  
      res.status(200).json(results.rows[0])
    } catch (error) {
      res.status(409).json( { error: error.message } )
    }
  }

// create a new item combo
const createItem = async (req, res) => {
    try {
      const { color, model, name } = req.body
      const results = await pool.query(
        `INSERT INTO customitem (color, model, name) VALUES ($1, $2, $3) RETURNING *`,
         [color, model, name]
        )
      res.status(201).json(results.rows) // results.rows[0]?
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }

// update an existing item combo
const updateItem = async (req, res) => {
    try {
        const itemId = req.params.itemId
        const { color, model, name } = req.body
        const results = await pool.query(`
            UPDATE customitem SET color = $1, model = $2, name = $3 WHERE id = $4`,
            [color, model, name, itemId]
        )
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
  }


// delete a specific item combo based on id
const deleteGift = async (req, res) => {
    try {
        const itemId = req.params.itemId
        const results = await pool.query('DELETE FROM customitem WHERE id = $1', [itemId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
  }

export default {
    index: getItems,
    show: getItemById,
    create: createItem,
    update: updateItem,
    delete: deleteGift
  }