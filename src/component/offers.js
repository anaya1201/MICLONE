import React from 'react'
import offer from './offer.js'
import "../styles/offers.css"


const offers = ({offer}) => {
  return (
    <div className='offersection'>
        {offers.map((item,index)=>(
            <offer key={item.image} index={index} src={item.image} link={item.url}/>
        ))}

    </div>
  )
}

export default offers