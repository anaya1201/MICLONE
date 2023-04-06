import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image,name,index,price,review}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={'${index} review'}/>
        <span>{name}</span>
        <b>{price}</b>

    </div>
  )
}

export default ProductReviewCard