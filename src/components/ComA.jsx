import React from 'react'
import ComB from './ComB'
//props
const ComA = () => {
    let data = [{id:1,name:"dev"},{id:2,name:"nandani"},{id:3,name:"mansi"},{id:4,name:"garav"}]
  return (
    <div><ComB data={data} /></div>
  )
}

export default ComA