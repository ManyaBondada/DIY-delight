import React from 'react'
import '../App.css'
import '../css/CreateCar.css'
import {useState, useEffect} from 'react'
import CustomFeatureAPI from '../services/customFeature.js'
import CustomItemAPI from '../services/customItem.js'

const CreateCar = () => {
    const [features, setFeatures] = useState([])
    const [selectedFt, setSelectedFt] = useState({id: 0, name: ' ', color: ' ', model: ' '})
    const [models, setModels] = useState([])
    const [colors, setColors] = useState([])

    const handleOnChange = (event) => {
        console.log(event.target.value);
        setSelectedFt({
            ...selectedFt,
            [event.target.name]: event.target.value
        });
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        await CustomItemAPI.createItem(selectedFt)
        window.location = '/customcars'
    }



    useEffect(() => {
        (async () => {
            try {
                const data = await CustomFeatureAPI.getFeatures()
                //console.log(data.data)
                setFeatures(data.data)
            } catch (error) {
                throw error 
            }
        }) ();


    }, [])

    useEffect(() => {
        // populate color and model arrays
        const modelsArr = features.filter((feature) => feature.category === 'model')
        const colorsArr = features.filter((feature) => feature.category === 'color')
        setModels(modelsArr)
        setColors(colorsArr)
    }, [features])
    
    return (
        <div>
            <form className='create-car-form' onSubmit={handleOnSubmit}>
                <h2>Create a custom car</h2>
                
                <label htmlFor='name'>
                    Name
                    <input type='text' id='name' name='name' value={selectedFt.name} onChange={handleOnChange} />
                </label>

                <label htmlFor="model">
                    Select Model
                    <select id="model" name="model" value={selectedFt.model} onChange={handleOnChange}>
                        <option value="">-- Select Model --</option>
                        {models.map((model) => (
                        <option key={model.id} value={model.feature}>
                            {model.feature}
                        </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="color">
                    Select Color
                    <select id="color" name="color" value={selectedFt.color} onChange={handleOnChange}>
                        <option value="">-- Select Color --</option>
                        {colors.map((color) => (
                        <option key={color.id} value={color.feature}>
                            {color.feature}
                        </option>
                        ))}
                    </select>
                </label>
                
                <br></br>
                <div>
                    <h2>Confirm your selections</h2>
                </div>

                <div className='edit-buttons'>
                    <button type='submit'>Create Car!</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCar