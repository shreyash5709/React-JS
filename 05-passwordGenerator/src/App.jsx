import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += '1234567890';
    if(charAllowed) str += '`~!@#$%^&*-_+={}[]'

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto
      shadow-md rounded-lg px-4 my-10 py-3 text-orange-500
      bg-gray-800">
        <h1 className='text-white text-2xl text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" 
          className='bg-white w-full text-black py-1 px-3 outline-none' 
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0 active:scale-95 transition-transform duration-200'
          >Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            className='cursor-pointer'
            id='num'
            onChange={(e) => {
              setNumAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="num">Num-Allowed</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            className='cursor-pointer'
            id='char'
            onChange={(e) => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="char">Char-Allowed</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
