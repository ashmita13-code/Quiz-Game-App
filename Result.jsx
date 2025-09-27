import React, { useContext } from 'react'
import {con} from '../Context'
import './Result.css'

const Result = () => {
  const {start,exit,quiz_ans,correct,setStart,setExit} = useContext(con);

  const play_again=()=>{
    setStart(false);
    setExit(false);
  }
  return (
    <div className='rcontainer'>
    <div className='result'>
      <h2>Your final score :{correct}</h2>
      <h3>{correct} questions are correct out of {quiz_ans.length}!</h3>
      <button className='r-btn'onClick={play_again}>Play Again</button>
    </div>
      
    </div>
  )
}

export default Result
