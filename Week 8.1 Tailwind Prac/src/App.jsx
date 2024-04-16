import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{backgroundColor: 'red'}}>Hello, from div 1</div>
      <div style={{backgroundColor: 'green'}}>Hello, from div 2</div>
      <div style={{backgroundColor: 'yellow'}}>Hello, from div 3</div>

     </div>
    
    </>
  )
}

export default App
