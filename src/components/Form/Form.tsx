import React, { useState } from 'react'
import { IInput } from '../../models/interface'
import { hexToRgb } from '../../models/hexToRgb'
import { Data } from '../Data/Data';


export const Form = () => {

  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput(preForm => ({...preForm, [name]: value}))
    if(value.length !== 7) return
    if(value[0] != '#') {
      setInput(preForm => ({...preForm, result: "Ошибка!", color: "red"}));
      return
    }
    const rgbColor = hexToRgb(value)
    setInput(preForm => ({...preForm, result: rgbColor.converter, color: rgbColor.color}))
  }

  const [input, setInput] = useState<IInput>({
    useName: '',
    result: '',
    color: "rgb(178, 195, 212)",
    handler: handleNameChange,
  });

  return (
    <>
      <Data data={input}/>
    </>
  )
}
