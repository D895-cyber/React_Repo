import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);
    const increment =()=>{
        setValue(value + 1)
    }
    const decrement =()=>{
        if(value!==0){
            setValue(value - 1)
        }
        
    }
    const Reset =()=>{
        setValue(0)
        
    }
    const multiple =()=>{
        setValue(value+5)
    }
    return (
        <div className='flex justify-center items-center m-auto border-2 border-red-700 max-h-[30rem] max-w-[30rem] h-[30rem] w-[30rem] min-w-[1]'>
            <div className='flex flex-col'>
                <div className='font-bold text -2xl btn-primar'>{value}</div>
                <div className='flex justify-around w-[100%]'>
                <div className='btn-primary' onClick={increment}>Inc</div>
                <div className='btn-primary' onClick={decrement}>Dec</div>
                <div className='btn-primary' onClick={Reset}>Reset</div>
                <div className='btn-primary' onClick={multiple}>Multiple</div>
                </div>
            </div>
            </div>
    )
}

export default Counter