import React from 'react'
import '../App.css'
import '../css/EditCar.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CustomItemAPI from '../services/customItem.js'

const EditCar = () => {
    
    const [item, setItem] = useState({id: 0, color: '', model: '', name: ''})
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const data = await CustomItemAPI.getItemById(id)
                setItem(data.data)
                console.log(item)
            } catch (error) {
                throw error
            }
        }) ()
    }, [id])

    const handleOnChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.value,
        })
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        await CustomItemAPI.updateItem(id, item)
        window.location = '/customcars'
    }

    const handleOnDelete = async (event) => {
        event.preventDefault()
        await CustomItemAPI.deleteItem(id)
        window.location = '/customcars'
    }


    return (
        <div>
            <form className='edit-car-form' onSubmit={handleOnSubmit}>
                <h2>Edit Item Details</h2>
                
                <label htmlFor='name'>
                    Name
                    <input type='text' id='name' name='name' value={item.name} onChange={handleOnChange} />
                </label>

                <label htmlFor='model'>
                    Model
                    <textarea id='model' name='model' value={item.model} onChange={handleOnChange} />
                </label>

                <label htmlFor='color'>
                    Color
                    <textarea id='color' name='color' value={item.color} onChange={handleOnChange} />
                </label>

                <div className='edit-buttons'>
                    <button type='submit'>Update</button>
                    <button onClick={handleOnDelete}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditCar