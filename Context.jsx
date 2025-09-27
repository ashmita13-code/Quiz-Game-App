import React, { useState } from 'react'
import { createContext } from 'react'
import App from './App';

const con= createContext();

const quiz_ans=[
  {
    "question": "Who created C language?",
    "a": "Bjarne Stroustrup",
    "b": "James Gosling",
    "c": "Dennis Ritchie",
    "d": "Guido van Rossum",
    "answer": "c"
  },
  {
    "question": "What does HTTP stand for?",
    "a": "HyperText Transfer Protocol",
    "b": "Hyperlink Text Transfer Protocol",
    "c": "HighText Transfer Protocol",
    "d": "Hyper Transfer Text Protocol",
    "answer": "a"
  },
  {
    "question": "Which company developed the Windows operating system?",
    "a": "Apple",
    "b": "IBM",
    "c": "Microsoft",
    "d": "Google",
    "answer": "c"
  },
  {
    "question": "What is the main function of the CPU?",
    "a": "Store data",
    "b": "Connect to the internet",
    "c": "Process data",
    "d": "Display output",
    "answer": "c"
  },
  {
    "question": "Which of the following is a programming language?",
    "a": "HTTP",
    "b": "HTML",
    "c": "Java",
    "d": "FTP",
    "answer": "c"
  },
  {
    "question": "Which device is used to connect a computer to a network?",
    "a": "Scanner",
    "b": "Router",
    "c": "Monitor",
    "d": "Printer",
    "answer": "b"
  },
  {
    "question": "What is the full form of 'IP' in IP address?",
    "a": "Internet Provider",
    "b": "Internal Protocol",
    "c": "Internet Protocol",
    "d": "Interactive Protocol",
    "answer": "c"
  },
  {
    "question": "Which operating system is developed by Apple?",
    "a": "Windows",
    "b": "Linux",
    "c": "macOS",
    "d": "Ubuntu",
    "answer": "c"
  },
  {
    "question": "Which of these is an open-source operating system?",
    "a": "Linux",
    "b": "Windows",
    "c": "macOS",
    "d": "DOS",
    "answer": "a"
  },
  {
    "question": "What is phishing?",
    "a": "A coding language",
    "b": "A method to catch fish online",
    "c": "A cyber attack to steal information",
    "d": "A type of firewall",
    "answer": "c"
  },
  {
    "question": "Which of these is a cloud computing platform by Amazon?",
    "a": "Google Cloud",
    "b": "Azure",
    "c": "AWS",
    "d": "IBM Cloud",
    "answer": "c"
  },
  {
    "question": "What does GUI stand for?",
    "a": "Graphical User Interface",
    "b": "Global User Internet",
    "c": "Graphical Universal Interface",
    "d": "General User Interaction",
    "answer": "a"
  }
]


const Context = (props) => {

    const [start,setStart]=useState(false);
    const [exit,setExit]=useState(false);
    const [correct,setCorrect] = useState(0);

  return (
    <con.Provider value={{start,exit,setStart,setExit,quiz_ans,correct,setCorrect}}>
         {props.children}

    </con.Provider>
  )
}

export default Context
export {con}
