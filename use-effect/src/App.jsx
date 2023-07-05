import { useState } from 'react'
import './App.css'
import LightSwitch from './components/LightSwitch'

function App() {
  
  const [flag, setFlag] = useState(false)
  return (
    <>
    <button onClick={e => setFlag(!flag)}>Click Me</button>
    {flag ? <LightSwitch /> : <h1>the light is off</h1>}
    </>
  )
}

export default App
