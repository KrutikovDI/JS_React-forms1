import React, { useState } from 'react'
import { IPropsData } from '../../models/interface'

export const Data = (props: IPropsData) => {
  const { useName, result, color, handler} = props.data
  let style = { backgroundColor: color }
  return (
    <>
    <form className='color' style={style}>
      <div className='convert'>
        <input type="text" name='useName' value={useName} className='input' maxLength={7} onChange={handler}/>
        <input type="text" name='result' value={result} className='result' disabled onChange={handler}/>
      </div>
    </form>
    </>
  )
}
