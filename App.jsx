import { useState } from 'react'
import './App.css'
import Start from './Components/Start'
import {con} from './Context'
import { useContext } from 'react'
import Quizgame from './Components/Quizgame'
import Context from './Context'
import Result from './Components/Result'

function App() {

  const {start,exit} =useContext(con);
  return (
    <>
    {
      exit == false
      ?
      <div>
      {start == true
      ?
      <Quizgame/>
      :
      <Start/>
      }
      </div>
      :
      <Result/>
    }
              
   
    </>
  )
}

export default App
