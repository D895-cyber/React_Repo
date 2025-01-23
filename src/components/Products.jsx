
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [value,setValue]= useState()
    
    useEffect(()=>{
        async function dataFn(){
          let jdata=  await fetch('https://dummyjson.com/products');
          let data = await jdata.json();
          setValue(data)
        }
        dataFn();
    },[])
    console.log(value);
    
  return (
    <div>
    {value?.products && value?.products.map((element,index)=>{
        return <><Product image={element.images[0]} title={element.title} /></>
    })}
    </div>
  )
}

const Product = ({image,title})=>{
    return <div><img src = {image}></img>
    <h1>{title}</h1>
    </div>
}

export default Products
