import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = 5
  const b = 7

  return (
    <>
    <h1>Task 1</h1>
    <hr />
      <h1>Name: Saurav</h1>
      <h2>Class: BCA</h2>
      <h3>Skills:<ol><li>Html</li><li>CSS</li><li>JS</li><li>Node.js</li><li>Python</li></ol></h3>
      <button>Hire Me</button>  
      <hr />
      <h2>Task 2</h2>
      <h3>ADD: {a+b}</h3>
      <hr />
      <h2>Task 3</h2>
      <img src=".//hero.png" alt="" />
    </>
  )
}

export default App
