import React from 'react'
import '../App.css'
import '../css/CreateCar.css'
import {useState, useEffect} from 'react'
import CustomFeatureAPI from '../services/customFeature.js'
import CustomItemAPI from '../services/customItem.js'

const CreateCar = () => {
    const [features, setFeatures] = useState([])
    const [selectedModel, setSelectedModel] = useState(null)
    const [selectedName, setselectedName] = useState('')
    const [selectedColor, setselectedColor] = useState(null)
    const [models, setModels] = useState([])
    const [colors, setColors] = useState([])

    const handleNameOnChange = (event) => {
        setselectedName(event.target.value);
    }

    const handleModelOnChange = (event) => {
        let temp = features.find(feature => feature.feature === event.target.value)
        setSelectedModel(temp);
        console.log(temp)
    }

    const handleColorOnChange = (event) => {
        let temp = features.find(feature => feature.feature === event.target.value)
        setselectedColor(temp);
        console.log(temp)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        let item = {name: selectedName, model: selectedModel.feature, color: selectedColor.feature}
        console.log(item)
        if (selectedName == ""){ // fix this alert!!
            alert("Fill out all fields!")
        }
        else{
            await CustomItemAPI.createItem(item)
            window.location = '/customcars'
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await CustomFeatureAPI.getFeatures()
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
                    <input type='text' id='name' name='name' value={selectedName} onChange={handleNameOnChange} />
                </label>

                <label htmlFor="model">
                    Select Model
                    <select className='dropdown'id="model" name="model" value={selectedModel ? selectedModel.name : ''} onChange={handleModelOnChange}>
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
                    <select className='dropdown' id="color" name="color" value={selectedColor ? selectedColor.name : ''} onChange={handleColorOnChange}>
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
                    <div className='img-container'>
                        {
                            selectedModel ? 
                                    <div>
                                        <p>Selected Model</p>
                                        <img className='display-img' src={selectedModel.image}></img>
                                        <p>Price of feature is: {selectedModel.price}</p>
                                    </div>
                            : null
                        }
                        {
                            selectedColor ? 
                                    <div>
                                        <p>Selected Color</p>
                                        <img className='display-img' src={selectedColor.image}></img>
                                        <p>Price of feature is: {selectedColor.price}</p>
                                    </div>
                            : null
                         }
                    </div>                    
                </div>

                <div className='edit-buttons'>
                    <button type='submit'>Create Car!</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCar