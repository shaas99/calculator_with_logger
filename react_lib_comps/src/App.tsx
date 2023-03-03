import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import TextField from './components/TextField'



function App() {
  
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [total, setTotal] = useState(0);

  function ClickButton() {
    setTotal(input1+input2);
  }

  function ClickButton2() {
    setTotal(input1-input2);
  }

  function ClickButton3() {
    setTotal(input1*input2);
  }

  function ClickButton4() {
    setTotal(input1/input2);
  }

  return (
    <div>
      <TextField value={input1} setValue={setInput1}/>
      <TextField value={input2} setValue={setInput2}/>
      
      <div > <br/> {total} </div>
      <br/>
      <Button text='+' action={ClickButton}></Button>
      <Button text='-' action={ClickButton2}></Button>
      <Button text='*' action={ClickButton3}></Button>
      <Button text='/' action={ClickButton4}></Button>
    </div>
  )
}

export default App
