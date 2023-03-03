import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button, TextField} from 'react_lib_comps'         // components from react components library
import { logging, LogEntry } from 'ts_lib_logger';        // logger from ts logging library
import { add, subs, mult, div} from 'ts_lib_operations'  // operations from ts operations library



// Configuring the logger
logging         
  .configure({
    minLevels: {
      '': 'info',
    'App': 'trace'
    }
  })
  .registerConsoleLogger();


const logger = logging.getLogger('App');                   // initializing the instance of logger

logger.info(`This is INITIAL info log of application`);
logger.trace(`This is INITIAL trace log of application`);


function App() {
  
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [total, setTotal] = useState(0);

  function ClickButton() {
    // setTotal(input1+input2);
    setTotal(add(input1, input2));
  }

  function ClickButton2() {
    // setTotal(input1-input2);
    setTotal(subs(input1, input2));

  }

  function ClickButton3() {
    // setTotal(input1*input2);
    setTotal(mult(input1, input2));

  }

  function ClickButton4() {
    // setTotal(input1/input2);
    setTotal(div(input1, input2));

  }
  
  logger.info(`The total is changed to ${total} and is rendered`);

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


logger.info(`This is END info log of application`);
logger.trace(`This is END trace log of application`);