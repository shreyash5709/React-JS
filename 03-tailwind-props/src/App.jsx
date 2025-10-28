import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Shreyash-Jaiswal",
    age: 22,
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Shreyash Jaiswal"/>
    </>
  )
}

export default App
