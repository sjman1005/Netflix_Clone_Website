import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Hello I am Component: {count}</h1>
    </div>
  )
}

export default Counter