import React from 'react'
import { StarRatingNostatus } from '../StarRating/StarRating'
import './Color.css'
const Color = ({ title, color, rating = 0, onRemove = f => f,  onRate = f => f }) =>
    <section className="colorContain">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color" style={{ backgroundColor: color }}></div>
        <div>
            <StarRatingNostatus starsSelected={rating} onRate = {onRate} />
        </div>
    </section>

export {Color}