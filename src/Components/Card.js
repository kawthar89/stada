import React from 'react'

const Card = (data) => {
  return (
    <div>
    <img  className='img-card'src={data.img}/>
    <h1>{data.nom}</h1>
    <h3>{data.prix}</h3>
    <h4>{data.Description}</h4>
    </div>
  )
}

export default Card

