import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> count: {count}</h1>  
      <button className='btn btn-success' onClick={()=>setCount(count  + 1)}>increase</button>
      <button className='btn btn-danger' onClick={()=>setCount(count -1)}>decrease</button>
      <button className='btn btn-secondary'onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default Counter