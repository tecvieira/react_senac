import { useState } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Body></Body>
    </>
  )
}

export default App
