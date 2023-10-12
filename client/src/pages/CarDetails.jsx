import React from 'react'
import '../App.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CustomItemAPI from '../services/customItem.js'

const CarDetails = () => {
    const [item, setItem] = useState({id: 0, name: '', model: '', color: ''})
    const { id } = useParams()

    const handleOnClick = (event) => {
        event.preventDefault()
        window.location.href = `/edit/${id}`
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await CustomItemAPI.getItemById(id)
                setItem(data.data)
            } catch (error) {
                throw error
            }
        }) ()
    }, [id])


    return (
        <div>
            <div className='item-details'>
                <h2>Name: {item.name}</h2>
                <p>Model: {item.model}</p>
                <p>Color: {item.color}</p>
                <button onClick={handleOnClick}> Edit </button>
            </div>
        </div>
    )
}

export default CarDetails