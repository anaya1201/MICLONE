import React from 'react'
import "../styles/navcard.css"

const navcard = ({name,price,image,index}) => {
  return (
    <div className='navcard'>
        <img stc={image} alt={'${index}phone'}/>
        <p>{name}</p>
        <span>{price}</span>

    </div>
  )
}

export default navcard