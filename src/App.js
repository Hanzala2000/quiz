import React, { useState } from 'react'
import './App.css'

function App() {

  let [currentQues,setCurrentQues] = useState(0)
  let [score,setScore] = useState(1)
  
  let questionArr = [
    {
      question: "what is 2+2",
      answer:[
        {answer:2,correct:false},
        {answer:6,correct:false},
        {answer:4,correct:true},
        {answer:0,correct:false},
      ]
    },
    {
      question: "what is 6+2",
      answer:[
        {answer:2,correct:false},
        {answer:8,correct:true},
        {answer:4,correct:false},
        {answer:0,correct:false},
      ]
    },
    {
      question: "what is 4+2",
      answer:[
        {answer:8,correct:false},
        {answer:6,correct:true},
        {answer:4,correct:false},
        {answer:0,correct:false},
      ]
    },
  ]
  let changeQues = (correct)=>{
    if (correct == true) {
      alert("correct")
      setScore(score+1)
    }else if(correct == false){
      alert("Wrong")
    }
    let nextQues = currentQues+1
    if (nextQues<questionArr.length) {
      setCurrentQues(nextQues)
    }else{
      alert("end")
      alert(score)
    }
  }
  
  return (
    <div className='main'>
      <div className='main1'>
      <h1>Question {currentQues+1}/{questionArr.length}:{questionArr[currentQues].question}</h1>
      </div>
      <div className='main2'>
        {questionArr[currentQues].answer.map((answer,ind)=>{
        return  <button onClick={()=>changeQues(answer.correct)} key={ind}>{answer.answer}</button>
        })}
      </div>
    </div>
  );
}

export default App;
