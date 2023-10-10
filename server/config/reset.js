import { pool } from './database.js'
import './dotenv.js'
import customfeatureData from '../data/customfeatureData.js'
import customitemData from '../data/customitemData.js'

const createcustomitemTable = async () => {
    const createCustomItemQuery = `
      DROP TABLE IF EXISTS customitem;
  
      CREATE TABLE IF NOT EXISTS customitem (
        id SERIAL PRIMARY KEY,
        color VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
      )
    `
  
    try {
      await pool.query(createCustomItemQuery)
      console.log('🎉 customitem table created successfully')
    } catch (err) {
      console.error('⚠️ error creating customitem table', err)
    }
  }

  const seedcustomitemTable = async () => {
    await createcustomitemTable()
  
    customitemData.forEach((item) => {
      const insertQuery = {
        text: 'INSERT INTO customitem (color, model, name) VALUES ($1, $2, $3)'
      }
      
      // by default, this data will be empty but I'm leaving it here just in case
      const values = [
          item.color,
          item.model,
          item.name
      ]
  
      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error('⚠️ error inserting item', err)
          return
        }
        console.log(`✅ ${item.name} added successfully`)
      })
    })
  }

  const createcustomfeatureTable = async () => {
    const createCustomFeatureQuery = `
      DROP TABLE IF EXISTS customfeature;
  
      CREATE TABLE IF NOT EXISTS customfeature (
        id SERIAL PRIMARY KEY,
        category VARCHAR(255) NOT NULL,
        feature VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL
      )
    `
  
    try {
      await pool.query(createCustomFeatureQuery)
      console.log('🎉 customfeature table created successfully')
    } catch (err) {
      console.error('⚠️ error creating customfeature table', err)
    }
  }

  const seedcustomfeatureTable = async () => {
    await createcustomfeatureTable()
  
    customfeatureData.forEach((feature) => {
      const insertQuery = {
        text: 'INSERT INTO customefeature (category, feature, price, image) VALUES ($1, $2, $3, $4)'
      }
  
      const values = [
          feature.category,
          feature.feature,
          feature.price,
          feature.image
      ]
  
      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error('⚠️ error inserting feature', err)
          return
        }
        console.log(`✅ ${feature.name} added successfully`)
      })
    })
  }


seedcustomitemTable()
seedcustomfeatureTable()