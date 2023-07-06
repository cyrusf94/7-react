import { useState } from 'react'
import './App.css'
import List from './components/List'
import Display from './components/Display'

function App() {
  const [postId, setPostId] = useState(0)

  return (
    <>
    {postId > 0 ? <Display postId={postId} /> : <List setPostId={setPostId}/> }
    </>
  )
}

export default App
