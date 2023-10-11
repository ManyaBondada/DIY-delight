import React from 'react'
import '../App.css'
import '../css/CarSummary.css'

const CarSummary = ( { item } ) => {

    const handleOnClick = (event) => {
        event.preventDefault()
        window.location.href = `/customcars/${item.id}`
    }

    return (
        <div className='summary-card-box'>
            <div className='summary-card'>
                <h2>Name: {item.name}</h2>
                <p>Model: {item.model}</p>
                <p>Color: {item.color}</p>
                <button onClick={handleOnClick}> View Details </button>
            </div>
        </div>
    )
}

export default CarSummary