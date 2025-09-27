import React, { useContext } from 'react'
import './Start.css'
import {con} from '../Context'

const Start = () => {

  const {setStart} = useContext(con);
  return (
    <div className='container'>
      <button onClick={()=>setStart(true)} className='btn'>Start</button>
    </div>
  )
}

export default Start
