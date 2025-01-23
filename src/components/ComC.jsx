import React, { useState } from 'react'
import Product from './Products';

// me phel api se data fetch kaunga and show kaunga 

const ComC = () => {
    const [products,setProducts]= useState();

    const fetchData = async() => {
       let data =await fetch('https://dummyjson.com/products')
       let d= await data.json();
       console.log(d);
       setProducts(d.products)
       return d
       
    }
  return (
    <div>
    <button onClick={()=>fetchData()}>click me</button>
    <div className='flex max-w-[100vw] w-[90vw] justify-evenly items-center m-auto flex-wrap'>
    {products && products.map((prod)=>{
        return  <Product  product={prod}/>     //reuseable component
    })}
        
    </div>
    </div>
  )
}

export default ComC