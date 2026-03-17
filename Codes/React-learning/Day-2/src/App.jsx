import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const name = "Saurav";
 const role = "Full-Stack Developer"
 const a = 5
 const b = 6
  return (
    <>
      <h1>Hello {name}</h1>
      <h2>Add {a + b}</h2>
      <hr />
      <div>
        <h1>Name: {name}</h1>
        <h2>Role: {role}</h2>
        <button>contact me</button>
      </div>
    </>
  )
}

export default App
