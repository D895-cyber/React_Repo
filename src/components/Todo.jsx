// import React, { useState } from 'react'

//  const Todo = () => {
//     let [todos, setTodos] = useState([])
//     let [InputValue,setInputValue]=useState('');
//     let i = 1
//     const add = ()=>{
//         if(InputValue!== ''){
          
//             setTodos([...todos,{id:Date.now(),value:InputValue,completed:false}])
//             setInputValue('')
//         }   
//     }
//     const toggleComplete = (idx) => {
//         setTodos(
//           todos.map((t,i)=>i === idx ? {...t,completed:!t.completed}:t)
//         )
//       }
//       const deleteTask = (idx)=>{
//         setTodos(todos.filter((_,i)=>i!==idx))
//       }
//     console.log(todos);
//   return (
//     <div>
//         <input type='text' placeholder='Enter your task' onChange={(e)=>setInputValue(e.target.value)}></input>
//         <span className='btn-primary' onClick={add}>Submit</span>
//         <span className='btn-primary' onClick={toggleComplete}>Toggle</span>
//         <span className='btn-primary' onClick={deleteTask}>Delete</span>
//         {todos && todos.map(t=>{
//             return <div className=''>{
//                 t.value 
//             }</div>
//         })}
//     </div>
//   )
// }
// export default Todo
import React, { useState } from 'react';

const Todo = () => {
    let [task, setTask] = useState([]);
    let [inputVal, setInputVal] = useState('');

    const add = () => {
        if (inputVal !== '') {
            setTask([...task, { id: Date.now(), value: inputVal, completed: false }]);
            setInputVal('');
        }
    };

    const toggleComplete = (idx) => {
        setTask(
            task.map((t, i) => (i === idx ? { ...t, completed: !t.completed } : t))
        );
    };

    const deleteTask = (idx) => {
        setTask(task.filter((_, i) => i !== idx));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter task"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <span className="btn-primary" onClick={add}>
                Add Task
            </span>
            {task &&
                task.map((t, i) => (
                    <div key={t.id}>
                        <ReusableComponent value={t} toggleComplete={toggleComplete} idx={i} />
                        <span className="btn-primary" onClick={() => deleteTask(i)}>
                            Delete
                        </span>
                    </div>
                ))}
        </div>
    );
};

export default Todo;

const ReusableComponent = ({ value, toggleComplete, idx,deleteTask }) => {
    return (
        <div className='w-[200px] border-red-500 flex justify-center items-center'>
            <span
            
            style={{ textDecoration: value.completed ? 'line-through' : 'none' }}
            onClick={() => {
                toggleComplete(idx);
            }}
        >
            {value.value}
            <span className="btn-primary" onClick={() => deleteTask(idx)}></span>
        </span>
        </div>
        
    );
};