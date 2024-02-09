import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0) 
  const Addvalue=()=>{
    setCount(counter +1)
    setCount( (r)=>r+1) // callback function is used to increment


  }

  const Removevalue=()=>{
    setCount(counter -1)
   // setCount( (r)=>r-1) // callback function is used to decrement
  }

  
  return (
<>
<button onClick={Addvalue}>click here</button>
<button onClick={Removevalue}> decrease </button>
<p> the counter value is : {counter}</p>
</>
  
  )
}

export default App
