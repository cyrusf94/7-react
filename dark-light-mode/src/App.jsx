import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'



function App() {

  const lightMode = {
    color: 'black',
    backgroundColor: 'white',
  }
  
  const darkMode = {
    color: 'white',
    backgroundColor: 'black'
  }

  const [styleMode, setStyleMode] = useState(lightMode)
  const [switchButton, setSwitchButton] = useState("Dark Mode")
  

  function modeSwitch() {
    if (styleMode.color == "black") {
      setStyleMode(darkMode)
      setSwitchButton("Light Mode")
    } else {
      setStyleMode(lightMode)
      setSwitchButton("Dark Mode")
    }
  }

  return (
    <>
    <div style={styleMode}>
    <button onClick={e => modeSwitch()}>{switchButton}</button>
    <Header />
    <Content />
    <Footer />
    </div>
    </>
  )
}

export default App
