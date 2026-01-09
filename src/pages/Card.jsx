import React from 'react'

function Card({title,image,description}) {
  return (
    <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card