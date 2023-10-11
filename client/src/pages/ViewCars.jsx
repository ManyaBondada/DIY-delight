import React from 'react'
import '../App.css'
import {useState, useEffect} from 'react'
import CustomItemAPI from '../services/customItem.js'
import CarSummary from '../components/CarSummary'

const ViewCars = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await CustomItemAPI.getItems()
                setItems(data.data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div>
            {
                items && items.length > 0 ? items.map((item) => 
                    <CarSummary key={item.id} item={item} />
                ) : <h3>{'No combos available 😔'}</h3>
            }
        </div>
    )
}

export default ViewCars