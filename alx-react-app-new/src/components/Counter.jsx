import React, {useState} from 'react'

const Counter = () => {
const [count,setCount]=useState(0)

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={(e)=>setCount(count +1)}> Increment</button>
      <button onClick={(e)=>setCount(count -1)}> Decrement</button>
      <button onClick={(e)=>setCount(0)}> Reset</button>
      
    </div>
  )
}

export default Counter
