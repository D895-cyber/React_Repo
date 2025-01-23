import React from 'react'

const ComB = ({data}) => {
    console.log(data);
  return (
    <div>{data.map((value,idx)=>{
        return(
        <div key={idx}>{value.name}</div>
    )
    })}</div>
  )
}

export default ComB