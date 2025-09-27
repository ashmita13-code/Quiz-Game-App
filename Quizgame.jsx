import React, { useContext, useState } from 'react'
import './Quizgame.css'
import {con} from '../Context'


const Quizgame = () => {

  const [current,setCurrent] =useState(0);
  const {quiz_ans,correct,setCorrect,setExit} = useContext(con);
  console.log(quiz_ans[current])
  const [ans,setAns] = useState("");



  const save_answer=()=>{
    if(quiz_ans[current].answer === ans)
    {
      setCorrect(correct+1)
    }
    setAns("")
    if((current+1) === quiz_ans.length)
    {
      setExit(true)
    }
    else{
      setCurrent(current+1)
    }
    
  }

  return (
    <div className='qcontainer'>
        <div className='content'>
            <h2>{current+1}. {quiz_ans[current].question}</h2>
            <div className='option'>
               <div className={(ans)==="a"?'canswer':''} onClick={()=>setAns("a")}>{quiz_ans[current].a}</div>
               <div className={(ans)==="b"?'canswer':'' } onClick={()=>setAns("b")}>{quiz_ans[current].b}</div>
               <div className={(ans)==="c"?'canswer':''} onClick={()=>setAns("c")}>{quiz_ans[current].c}</div>
               <div className={(ans)==="d"?'canswer':''} onClick={()=>setAns("d")}>{quiz_ans[current].d}</div>
            </div>
            <div className='menu'>
                <div><button className='reset' onClick={()=>setAns("")}>Reset</button></div>
                <div><button className='save' onClick={save_answer}>Save & Next</button></div>
                <div><button className='exit' onClick={()=>setExit(true)}>Exit</button></div>
            </div>
        </div>
     
    </div>
  )
}

export default Quizgame
