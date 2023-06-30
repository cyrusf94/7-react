import './App.css';
import React, { useState } from 'react';


function App() {
  const [ first, setFirst] = useState("")
  const [ middle, setMiddle] = useState("")
  const [ last, setLast] = useState("")

  function display(first, middle, last) {
      let message = `Hello, ${first} ${middle} ${last}`
      return message;
    }

  return (
    <>
    <form action="">
    <h2>Please enter your name</h2>
    <input onChange={(e) => {
      setFirst(e.target.value)
    }} placeholder='enter first name' />
    <input onChange={(e) => {
    setMiddle(e.target.value)
    }} placeholder='enter middle name' />
    <input onChange={(e) => {
    setLast(e.target.value)
    }} placeholder='enter last name' />
    <div>{display(first, middle, last)}</div>
    </form>
</>
)
}


export default App;

