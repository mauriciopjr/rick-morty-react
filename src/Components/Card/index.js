import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export function Card(props) {
    const { id, name, img} = props
    return (
        <Link to={`/personagem/${id}`} className="card">
            <img src={img} alt={name} />
            <p>{name}</p>
        </Link>
    )
}