import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = () => {
  return (
    <div className='Product Reviews'>
        {ProductReviews.map((item,index,)=>(
            <ProductReviewCard price={item.price} image={item.image} review={item.review} index={index} key={item.image}/>
        ))}

    </div>
  )
}

export default ProductReviews