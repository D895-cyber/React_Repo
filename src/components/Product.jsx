
import React from 'react'

const Product = ({product}) => {
    console.log(product);
  return (
    <div className='bg-red-200 w-[20vw]'>{product.title}
    <img src={product.images[0]} className='w-[300px] h-[300px]'></img>
    </div>
  )
}

export default Product
