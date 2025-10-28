import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#242424");
  let changeColor = function(event){
    let color = event.target.style.backgroundColor;
    setColor(color)
  }
  return (
    <div 
      className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3
         bg-white shadow-lg px-3 py-2 rounded-3xl">

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "red"}}
            >Red</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "green"}}
            >Green</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "blue"}}
            >Blue</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "olive"}}
            >Olive</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "gray"}}
            >Gray</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "yellow"}}
            >Yellow</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "pink"}}
            >Pink</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "purple"}}
            >Purple</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "lavender"}}
            >Lavender</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "white"}}
            >White</button>

            <button
              onClick={changeColor} 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200
             hover:shadow-xl active:shadow-inner' 
              style={{backgroundColor: "black"}}
            >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
