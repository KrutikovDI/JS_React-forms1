import React, { useState } from 'react'
import './App.css'
import { hexToRgb } from './models/hexToRgb'
import { IInput } from './models/iInput'

function App() {
  const [input, setInput] = useState<IInput>({
    useName: '',
    result: '',
    color: "rgb(178, 195, 212)"
  });
  const { useName, result, color} = input
  let style = { backgroundColor: color }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    const { name, value } = event.target;
    setInput(preForm => ({...preForm, [name]: value}))
    if(value[0] != '#' || value.length !== 7) return
    const rgbColor = hexToRgb(value)
    setInput(preForm => ({...preForm, result: rgbColor.converter, color: rgbColor.color}))
  }
  return (
    <>
    <form className='color' style={style}>
      <div className='convert'>
        <input type="text" name='useName' value={useName} className='input' onChange={handleNameChange}/>
        <input type="text" name='result' value={result} className='result' disabled onChange={handleNameChange}/>
      </div>
    </form>
    </>
  )
}

export default App
