import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(50)
  let [color, setColor] = useState("")
  let [isRed, setIsRed] = useState(false)

  function add() {
    if (count < 100) {
      setCount(count + 1)
    } else {
      count = 100
    }
  }


  function sub() {
    if (count > 0) {
      setCount(count - 1)
    } else {
      count = 0
    }
  }
  return (
    <div className='flex flex-col justify-center items-center bg-amber-200 min-h-screen gap-7'>
      <h1 className='font-bold text-4xl'>Counter: {count}</h1>
      <div className='flex justify-center items-center mx-16 gap-5'>
        <button className='flex justify-center items-center px-3 py-2 bg-green-600 hover:bg-green-800 font-bold text-2xl rounded-xl' onClick={add}>Increase</button>
        <button className='sub flex justify-center items-center px-3 py-2 bg-amber-600 hover:bg-amber-800 font-bold text-2xl rounded-xl' onClick={sub}>Decrease</button>
      </div>
    </div>
  )
}

export default App
